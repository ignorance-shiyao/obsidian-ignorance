// Pre-release self-check: node scripts/check-release.mjs
// Mirrors what the Obsidian directory scans for, plus what must never reach the public repository.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const read = file => readFileSync(file, "utf8");
const results = [];
const check = (ok, label, detail = "") => results.push({ ok, label, detail });
const git = (...args) => execFileSync("git", args, { encoding: "utf8" }).trim();

const manifest = JSON.parse(read("manifest.json"));
const pkg = JSON.parse(read("package.json"));
const css = read("theme.css");

// Manifest
check(/^\d+\.\d+\.\d+$/.test(manifest.version), "manifest version is x.y.z", manifest.version);
check(manifest.version === pkg.version, "package.json version matches manifest", `${pkg.version} / ${manifest.version}`);
check(!/obsidian|theme/i.test(manifest.name), "name has no 'Obsidian' or 'Theme'", manifest.name);
for (const key of ["name", "version", "minAppVersion", "author"]) check(Boolean(manifest[key]), `manifest has ${key}`);
check(!("id" in manifest) && !("description" in manifest) && !("isDesktopOnly" in manifest), "theme manifest has no plugin-only fields");
check(existsSync("LICENSE"), "LICENSE present");
check(existsSync("screenshot.png"), "screenshot.png present");
const changelog = read("CHANGELOG.md");
check(new RegExp(`^## ${manifest.version.replaceAll(".", "\\.")}$`, "m").test(changelog), "CHANGELOG has an entry for this version");

// Built file is the current build of the source
const before = css;
execFileSync("node", ["scripts/build.mjs"], { stdio: "ignore" });
check(read("theme.css") === before, "theme.css is up to date with src/theme.css");

// Phone / tablet rules must win over the desktop rules they adjust (see scripts/check-cascade.mjs).
let cascade = "";
try { execFileSync("node", ["scripts/check-cascade.mjs"], { encoding: "utf8" }); } catch (error) { cascade = String(error.stdout).trim().split("\n").pop(); }
check(!cascade, "device rules win over desktop rules", cascade);

// Directory lint rules
const count = (pattern, text = css) => (text.match(pattern) || []).length;
const stripped = css.replace(/\/\* @settings[\s\S]*?\*\//, "");
check(count(/!important/g, stripped) === 0, "no !important", String(count(/!important/g, stripped)));
check(count(/:has\(/g, stripped) === 0, "no :has()", String(count(/:has\(/g, stripped)));
check(count(/text-indent/g, stripped) === 0, "no text-indent", String(count(/text-indent/g, stripped)));
check(count(/(^|[;{\s])columns?\s*:|column-count/g, stripped) <= 1, "multi-column used at most once (known: slides)", String(count(/(^|[;{\s])columns?\s*:|column-count/g, stripped)));
check(count(/url\(\s*["']?(https?:)?\/\//g, stripped) === 0 && count(/@import/g, stripped) === 0, "no remote assets or @import");
check(css.length < 140 * 1024, "theme.css under 140 KB", `${(css.length / 1024).toFixed(0)} KB`);

// Nothing internal in the public repository
const files = git("ls-files").split("\n");
const internalName = /plan|roadmap|todo|notes?\.md$|handoff|交接|计划|迭代|\.dev\/|competitor|竞品/i;
check(!files.some(f => internalName.test(f) && !/^docs\/style-check\.md$/.test(f) && f !== "CHANGELOG.md"), "no planning or internal files tracked", files.filter(f => internalName.test(f) && f !== "docs/style-check.md").join(", "));
const forbidden = /\/Users\/|MyNotes|iCloud|40-归档|00-剪藏|@gmail|@qq\.com|claude|anthropic|co-authored|vlook|blubook|typora/i;
const textFiles = files.filter(f => /\.(md|css|json|mjs|js|ts|yml|yaml|sh|txt)$/.test(f) && f !== "package-lock.json" && f !== "scripts/check-release.mjs");
const hits = textFiles.flatMap(f => read(f).split("\n").map((line, i) => [f, i + 1, line]).filter(([, , line]) => forbidden.test(line)).map(([file, no]) => `${file}:${no}`));
check(hits.length === 0, "no personal or internal wording in tracked files", hits.slice(0, 6).join(", "));
const authors = [...new Set(git("log", "--format=%ae").split("\n"))];
check(authors.every(a => a.endsWith("@users.noreply.github.com")), "commit emails are GitHub noreply addresses", authors.join(", "));
check(git("status", "--porcelain") === "", "working tree is clean (commit before releasing)");

let failed = 0;
for (const { ok, label, detail } of results) {
  if (!ok) failed++;
  console.log(`${ok ? "✔" : "✘"} ${label}${detail && !ok ? ` — ${detail}` : ""}`);
}
console.log(failed ? `\n${failed} check(s) failed` : "\nAll checks passed");
process.exit(failed ? 1 : 0);
