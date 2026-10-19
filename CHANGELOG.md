# Changelog

## Unreleased
Turning off Obsidian's 缩减栏宽 (Readable line length) now lets the note fill the pane again; the theme was still holding it at 820px.

Search results in dark mode highlight matches with the same soft yellow pair as text highlights (was light text on bright yellow, about 1.6:1). In light code blocks, function names use a deepened accent colour (about 5:1 on the code background, was 3.3:1) and comments are slightly darker.

Headings now match what 1.0.21 described, with one change: H1–H4 use the accent colour and H5–H6 the text colour; the page title weight is 500 (a later rule was still forcing 800).

With the theme alone (Ignorance Advanced not enabled), the folder path in the note header is no longer hidden.

## 1.0.21
Aligned with the store images: H1–H3 headings and their numbers use the accent colour (smaller headings and the page title keep the text colour), reading-view highlights are soft rounded pills, tables span the full width, and light paper is warm white. Code cards stay light in light mode.

Table text and header text are 13px (were 14px), matching the lighter tables in the store images.

Headings use a lighter serif weight (500, was 600; the page title 500, was 700), closer to the store images; with the default serif heading font they now read as calm rather than heavy.

Four extra callout types with no plugin needed: `> [!decision]`, `> [!risk]`, `> [!definition]` and `> [!idea]`, each with its own icon and one of the existing semantic palettes (so light and dark stay consistent).

Side notes: a `> [!aside]` callout sits in the right page margin on very wide windows (1600px and up) and stays an ordinary quiet callout otherwise.

Two long-form reading modes, switched per note with `cssclasses`: `ib-large` (20px text, looser lines, stronger contrast, thicker focus ring, underlined links) and `ib-eink` (no shadows, motion or tints; hard borders, underlined links, highlights shown as double underline). Meaning never depends on colour alone.

Bases tables and cards, plus Dataview errors and Tasks details, follow the theme: a tinted heading row, row lines without column borders, rounded cards, and the same colours in light and dark. Tested against the Bases core plugin; the Dataview and Tasks rules are written from their documented class names and were not checked against those plugins.

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
