// Minifies src/theme.css into theme.css (the file Obsidian installs). Run: npm run build
import { readFileSync, writeFileSync } from "node:fs";
import { transform } from "lightningcss";
const { code, warnings } = transform({ filename: "theme.css", code: readFileSync("src/theme.css"), minify: true, targets: { chrome: 120 << 16 } });
if (warnings?.length) console.warn(warnings);
writeFileSync("theme.css", code);
console.log(`theme.css: ${(code.length / 1024).toFixed(0)} KB`);
