// Joins src/parts/*.css (in file-name order; the order is the cascade) and minifies them into theme.css,
// the file Obsidian installs. Run: npm run build
import { readFileSync, writeFileSync } from "node:fs";
import { transform } from "lightningcss";
import { sourceFiles, sourceText } from "./source.mjs";
const { code, warnings } = transform({ filename: "theme.css", code: Buffer.from(sourceText()), minify: true, targets: { chrome: 120 << 16 } });
if (warnings?.length) console.warn(warnings);
// Style Settings reads this block from the installed file; minifying drops comments, so it is appended afterwards.
const settings = readFileSync("scripts/style-settings.yml", "utf8").trimEnd();
const output = Buffer.concat([code, Buffer.from(`\n/* @settings\n${settings}\n*/\n`)]);
writeFileSync("theme.css", output);
console.log(`theme.css: ${(output.length / 1024).toFixed(0)} KB`);
