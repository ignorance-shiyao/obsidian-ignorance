// Behaviour checks for theme.css in a real browser: the computed result, not the source text.
// Each check pins a fix that once regressed because a later or more specific rule won the cascade.
// No Obsidian app.css here, so this proves the theme's own rules; the full app still needs a look by hand.
//   node scripts/check-styles.mjs [theme.css]
// Needs a Chromium for Playwright: npx playwright install chromium-headless-shell
import { readFileSync } from "node:fs";
import { chromium } from "playwright";

const css = readFileSync(process.argv[2] || "theme.css", "utf8");
const page = `
<div class="workspace-leaf-content" data-type="markdown" style="width:1400px">
  <div class="markdown-reading-view"><div class="markdown-preview-view markdown-rendered is-readable-line-width"><div class="markdown-preview-sizer">
    <h1>H1</h1><h4>H4</h4><h5>H5</h5><p>正文</p>
    <blockquote><p>引用</p></blockquote>
    <div class="callout" data-callout="note"><div class="callout-content"><p>标注</p></div></div>
    <table><tbody><tr><td>a</td></tr><tr><td>b</td></tr></tbody></table><p><mark>高亮</mark></p>
    <pre><code><span class="token function">f</span><span class="token keyword">k</span><span class="token string">s</span><span class="token comment">c</span><span class="token property">p</span><span class="token operator">o</span><span class="token punctuation">.</span></code></pre>
  </div></div></div>
</div>
<div class="search-result-file-matched-text">命中</div>
<div class="workspace-leaf-content" data-type="markdown" style="width:1500px"><div class="markdown-preview-view is-readable-line-width"><div class="markdown-preview-sizer"><div class="callout" data-callout="aside" id="wide">s</div></div></div></div>
<div class="workspace-leaf-content" data-type="markdown" style="width:900px"><div class="markdown-preview-view is-readable-line-width"><div class="markdown-preview-sizer"><div class="callout" data-callout="aside" id="narrow">s</div></div></div></div>`;

const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: 1800, height: 1000 } });
await tab.setContent(`<html><body class="theme-light">${page}</body></html>`);
await tab.addStyleTag({ content: css });

const probe = () => tab.evaluate(() => {
  const s = sel => getComputedStyle(document.querySelector(sel));
  // rgb(r g b / a) in 0–255, or color(srgb r g b / a) in 0–1 (what color-mix() computes to).
  const rgb = c => { const m = c.replace(/^color\(srgb/, "").match(/[\d.]+/g).map(Number); const scale = c.startsWith("color(") ? 255 : 1; return m.slice(0, 3).map(v => v * scale); };
  const lum = c => { const [r, g, b] = c.map(v => v / 255).map(v => v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const ratio = (fg, bg) => { const a = lum(rgb(fg)), b = lum(rgb(bg)); return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05); };
  const codeBg = s("pre").backgroundColor;
  const tokens = /rgba\(0, 0, 0, 0\)|transparent/.test(codeBg) ? {} : Object.fromEntries([...document.querySelectorAll("pre .token")].map(t => [t.className.split(" ")[1], +ratio(getComputedStyle(t).color, codeBg).toFixed(2)]));
  return {
    sizer: parseFloat(s(".markdown-preview-sizer").width),
    search: +ratio(s(".search-result-file-matched-text").color, s(".search-result-file-matched-text").backgroundColor).toFixed(2),
    tokens,
    textPrimary: (() => { const d = document.createElement("i"); d.style.color = "var(--ib-text-primary)"; document.body.append(d); const c = getComputedStyle(d).color; d.remove(); return c; })(),
    h1: s("h1").color, h4: s("h4").color, h5: s("h5").color, p: s("p").color,
    titleWeight: getComputedStyle(document.body).getPropertyValue("--inline-title-weight").trim(),
    radius: s("pre").borderTopLeftRadius,
    quote: parseFloat(s("blockquote p").fontSize), callout: parseFloat(s(".callout-content p").fontSize),
    mark: s("mark").backgroundColor, td: s("tr:nth-child(2) td").backgroundColor,
    wide: s("#wide").float, narrow: s("#narrow").float
  };
});
const view = cls => tab.evaluate(c => { const v = document.querySelector(".markdown-preview-view"); v.className = `markdown-preview-view markdown-rendered ${c}`; }, cls);

const failures = [];
const check = (ok, what) => { console.log(`${ok ? "✔" : "✘"} ${what}`); if (!ok) failures.push(what); };
const light = await probe();
check(light.sizer <= 960, `readable line length limits the text column (${light.sizer}px)`);
check(light.search >= 4.5, `search match contrast, light (${light.search}:1)`);
for (const [name, value] of Object.entries(light.tokens)) check(value >= 4.5, `code ${name} contrast, light (${value}:1)`);
// No app.css here, so <p> has no --text-normal; H5 is checked against the theme's text token instead.
check(light.h4 === light.h1 && light.h5 !== light.h1 && light.h5 === light.textPrimary, `H1–H4 use the heading colour, H5 the text colour (${light.h4}, ${light.h5})`);
check(light.titleWeight === "500", `page title weight 500 (${light.titleWeight})`);
check(light.wide === "right" && light.narrow === "none", "side notes go to the margin only in a wide pane");

await view("");
check((await probe()).sizer >= 1300, "readable line length off fills the pane");
await view("is-readable-line-width ib-large");
const large = await probe();
check(large.quote >= 20 && large.callout >= 17, `ib-large scales quotes and callouts (${large.quote}px, ${large.callout}px)`);
await view("is-readable-line-width ib-eink");
const eink = await probe();
check(eink.mark === "rgba(0, 0, 0, 0)" && eink.td === "rgba(0, 0, 0, 0)", "ib-eink removes highlight and cell fills");
await view("is-readable-line-width");
await tab.evaluate(() => document.body.style.setProperty("--ib-code-radius", "24px"));
check((await probe()).radius === "24px", "code block radius follows the setting");

await tab.evaluate(() => { document.body.className = "theme-dark"; document.body.style.removeProperty("--ib-code-radius"); });
const dark = await probe();
check(dark.search >= 4.5, `search match contrast, dark (${dark.search}:1)`);
for (const [name, value] of Object.entries(dark.tokens)) check(value >= 4.5, `code ${name} contrast, dark (${value}:1)`);

await browser.close();
console.log(failures.length ? `\n${failures.length} style check(s) failed` : "\nAll style checks passed");
process.exit(failures.length ? 1 : 0);
