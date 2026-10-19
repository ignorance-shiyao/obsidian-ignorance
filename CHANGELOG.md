# Changelog

## Unreleased
Task statuses: `[-]` cancelled, `[>]` deferred, `[<]` scheduled, `[?]` question, `[!]` important, `[*]` starred, `[i]` info, `[b]` bookmark and `["]` quote each get their own colour and icon in reading view and live preview, so they differ by shape and not only by colour. Cancelled tasks are struck through.

Restored two icons lost in 1.0.16 (the notice close button and the properties heading showed a plain square). Properties: the heading uses a document icon and the heading colour; title, source/url/link, created and cssclasses get icons that say what they hold; list values other than tags read as quiet chips.

## 1.0.20
Continuous reading uses a flat paper surface. Larger serif headings, steadier paragraph spacing and compact tinted quotes bring the reading hierarchy together; code cards use clearer text and a smaller toolbar while staying light in light mode. Tables use tighter cells and calmer corners. Style Settings defaults match the updated quote and corner sizes.

## 1.0.16
Smaller theme.css (under 100 KB): styles for elements that only Ignorance Advanced creates moved to the plugin, and the file-type icons are written more compactly. No visual change. Use with Ignorance Advanced 1.0.16.

## 1.0.15
Phones: the page fills the screen width without card corners or extra margins, titles size to the screen so they no longer wrap one character per line, and lists, property names and quotes are tightened for narrow screens. Component text (headings, quotes, callouts, footnotes, definition lists, keys, details titles, table captions) scales with the body font size above 15px. Text element styles moved here from Ignorance Advanced, so the theme alone gives the same look. Use with Ignorance Advanced 1.0.15.

## 1.0.13
Style Settings support (content width, corner radii, quote rail and size) and per-note layouts: `ib-wide`, `ib-narrow`, `ib-compact`, `ib-no-title`. Use with Ignorance Advanced 1.0.13.

## 1.0.12
Source comments tidied; no change to the look. Use with Ignorance Advanced 1.0.12.

## 1.0.11
Partial fixes for known issues: nested quotes in Live Preview keep every rail aligned, including wrapped lines. theme.css is now about 96 KB and no longer uses `:has()`, `!important` or `text-indent`; the styles for plugin features (diagrams, charts, containers, slides, reader, paged view, export, Mermaid) ship with Ignorance Advanced 1.0.11 or later, so install the plugin to keep those looks. The README lists which looks need the plugin.

## 1.0.0
First public release.
