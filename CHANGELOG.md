# Changelog

## Unreleased
The source is now split into `src/parts/NN-name.css` (tokens, prose, components, workspace chrome, editor content, diagrams, page and design, modes), joined in file-name order into the same `theme.css`; comment-only leftovers were removed. The built file is byte-identical to before the split.

Content-level widths: add `ib-wide-tables` or `ib-wide-images` to a note's `cssclasses` and the text column stays narrow while tables or single-image paragraphs use more of the pane, up to the new Wide block width setting (Reading view; phone and narrow panes keep the column width).

New Style Settings: heading font, hide heading level labels, wrap long code lines, table text size, no table stripes, compact sidebars, and Wide block width. The Content width slider goes up to 1400px.

Canvas and Graph follow the theme: canvas background, dot pattern, card labels and a distinct yellow; graph lines, nodes, focused node, tags, attachments and labels; a selected canvas card gets a soft accent ring.

Review warnings cleared: highlight pills no longer use `box-decoration-break` and `ib-eink` draws its double underline with a border, so the Obsidian directory review reports nothing for the stylesheet. `npm run lint:css` (also in CI) fails on any CSS feature Obsidian 1.7.4 only partly supports or on `:has()`, and `npm run check` keeps theme.css within 100 KB.

theme.css is smaller (about 99 KB, was 112 KB): the presentation styles and Mermaid colour tokens moved to Ignorance Advanced, unused tokens were removed, and the file explorer keeps CSS icons for the common file types only (notes, canvas, Excalidraw, Bases, Word, PDF, Excel, PowerPoint, images, SVG); other types use the default file icon, or the full icon set when Ignorance Advanced is enabled.

The default reading column is wider (960px, was 820px); `ib-wide` is 1280px (was 1120px) and `ib-narrow` 780px (was 660px). The Content width slider now goes up to 1400px.

Turning off Obsidian's 缩减栏宽 (Readable line length) now lets the note fill the pane again; the theme was still holding it at 820px.

Search results in dark mode highlight matches with the same soft yellow pair as text highlights (was light text on bright yellow, about 1.6:1). In light code blocks, function names use a deepened accent colour (about 5:1 on the code background, was 3.3:1) and comments are slightly darker.

Headings now match what 1.0.21 described, with one change: H1–H4 use the accent colour and H5–H6 the text colour; the page title weight is 500 (a later rule was still forcing 800).

The Style Settings code block radius now applies to reading-view code blocks and to code fences in the editor, with or without Ignorance Advanced (it only reached the plugin's enhanced code cards before).

`ib-large` now scales quotes, callouts, footnotes, definitions, captions and headings with the 20px text (quotes stayed at 15px and callout text at 13px).

`ib-eink` now also removes highlight fills, table header and stripe fills and the paper texture.

Side notes (`> [!aside]`) move to the margin based on the note's own pane width (1320px and up, with readable line length on), so a narrow split pane in a wide window keeps them inline instead of spilling over the next pane.

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
