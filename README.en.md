<div align="center">

# Ignorance

**A calm, readable Obsidian theme for long-form Chinese and English writing.**
Eight colour palettes · light and dark · the same care in editing, reading, export and on mobile.

[中文](README.md) · [Companion plugin](https://github.com/ignorance-shiyao/obsidian-ignorance-advanced) · [Support](#support)

![License](https://img.shields.io/github/license/ignorance-shiyao/obsidian-ignorance?color=4D81EF)
![Release](https://img.shields.io/github/v/release/ignorance-shiyao/obsidian-ignorance?color=4D81EF)

<img src="docs/assets/palettes-light.gif" alt="Switching palettes in light mode" width="760">

<img src="docs/assets/palettes-dark.gif" alt="Switching palettes in dark mode" width="760">

</div>

## Colourful, on demand

Pick one of **eight palettes**, each tuned separately for light and dark: Azure, Pine, Book, Graphite, Terracotta, Teal, Wisteria and Amber. Headings, links, quotes, highlights, callouts and tables all follow the palette. Palette switching lives in the companion plugin; the theme itself ships with the Azure default.

## One look, everywhere

<div align="center">

| Light | Dark |
| :---: | :---: |
| <img src="docs/assets/showcase-light.jpg" width="420"> | <img src="docs/assets/showcase-dark.jpg" width="420"> |

</div>

## What it does

- **Typography first**: system fonts with PingFang SC / Microsoft YaHei, an 820 px reading column, generous line height, a clear H1–H6 scale that stays identical in Live Preview, Reading view and exports.
- **Considered blocks**: quotes with a bold rail, tables with a stronger header and soft stripes, code blocks with header, line numbers and syntax colours, callouts in several tones, round task checkboxes, footnotes, and six highlight colours that follow Obsidian's `--highlight-background-*` variables.
- **Light and dark designed together**, with calibrated contrast. Obsidian's own accent colour can optionally take over.
- **Mobile**: tighter spacing, horizontally scrolling tables, finger-sized controls.
- **Print and PDF**: sidebars and controls disappear; export matches the screen.
- **Respects your settings**: honours "reduce motion" and your font and size choices.

## Install

**From Obsidian**: Settings → Appearance → Themes → Manage → search "Ignorance" → Install and use. *(after the theme is accepted)*

**Manually**: download `theme.css` and `manifest.json` from the [latest release](https://github.com/ignorance-shiyao/obsidian-ignorance/releases/latest) into `<vault>/.obsidian/themes/Ignorance/`, then pick *Ignorance* under Settings → Appearance.

## Recommended: the companion plugin

The theme works on its own. Add **[Ignorance Advanced](https://github.com/ignorance-shiyao/obsidian-ignorance-advanced)** for the palette switcher, Mermaid and ECharts blocks, table and image tools, paged reading, presentations (PPT view and PPTX export), and exports.

## Notes

- Fonts are not bundled; Noto Sans CJK SC is the fallback.
- Third-party plugins that ship their own views may keep their own styling.
- `docs/style-check.md` exercises every element; copy it into a vault to review the theme.

## Development

```bash
scripts/install-to-vault.sh /path/to/vault   # copies theme.css and manifest.json into the vault
```

## Support

If you enjoy the theme, you can buy me a coffee. Thank you!

| WeChat | Alipay |
| --- | --- |
| ![WeChat](docs/assets/coffee-wechat.png) | ![Alipay](docs/assets/coffee-alipay.png) |

## License

[MIT](LICENSE).
