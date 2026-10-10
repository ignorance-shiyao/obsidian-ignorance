# Changelog

## 1.0.5
Mermaid diagram colors no longer rely on `!important`; Ignorance Advanced 1.0.3 releases the inline styles Mermaid sets so plain selectors win.

## 1.0.4
The published theme.css is now a minified build of src/theme.css (about 235 KB instead of 300 KB).

## 1.0.3
Fixes a broken rule that stopped the focus-mode hover highlight and the reduced-motion override. Fewer scorecard warnings: plain `text-decoration` values, and the split slide layout draws its own column divider.

## 1.0.2
Partial fixes for known issues. Nested quotes in Live Preview stay aligned. Far fewer `!important` declarations and no `:has()` selectors, for faster restyling and a cleaner scorecard. Feedback section added to the README.

## 1.0.1
Partial fixes for known issues: nested quotes in Live Preview now keep every rail aligned, including wrapped lines.

## 1.0.0
First public release.
