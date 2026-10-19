// The theme source is src/parts/NN-name.css, joined in name order. One shared reader so the build and the
// checks always see the same text.
import { readdirSync, readFileSync } from "node:fs";

export const sourceFiles = () => readdirSync("src/parts").filter(name => name.endsWith(".css")).sort().map(name => `src/parts/${name}`);
export const sourceText = () => sourceFiles().map(file => readFileSync(file, "utf8")).join("");
