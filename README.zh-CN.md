<div align="center">

# Ignorance

**为中英文长文写作而生的 Obsidian 主题：安静、耐读。**
八套配色 · 浅色与深色 · 编辑、阅读、导出和手机端一样用心。

[English](README.md) · [配套插件](https://community.obsidian.md/plugins/ignorance-advanced) · [支持作者](#支持)

![License](https://img.shields.io/github/license/ignorance-shiyao/obsidian-ignorance?color=4D81EF)
![Release](https://img.shields.io/github/v/release/ignorance-shiyao/obsidian-ignorance?color=4D81EF)

**English:** Ignorance is a calm, highly readable Obsidian theme for long-form Chinese and English writing. It ships a consistent look for editing, reading, PDF export and mobile, with typography-first layout, a clear heading hierarchy, and styled quotes, tables, code blocks, callouts and highlights, in both light and dark. Eight color palettes are available through the optional companion plugin *Ignorance Advanced*. Full English documentation: [README.md](README.md).

<img src="docs/assets/hero-desktop.jpg" alt="Ignorance 的浅色与深色" width="820">

</div>

## 多彩，随时切换

**八套配色**：Azure、Pine、Book、Graphite、Terracotta、Teal、Wisteria、Amber，每套都为浅色和深色分别调校。标题、链接、引用、高亮、标注块、表格都跟着配色走。切换配色由配套插件提供，主题本身默认 Azure。

<div align="center">
<img src="docs/assets/palettes.jpg" alt="八套配色的浅色与深色" width="820">
<br><br>
<img src="docs/assets/palettes-light.gif" alt="浅色模式切换配色（录屏）" width="400"> <img src="docs/assets/palettes-dark.gif" alt="深色模式切换配色（录屏）" width="400">
</div>

## 安静、耐读、有结构

<div align="center">
<img src="docs/assets/typography.jpg" alt="标题层级、引用、高亮、代码与表格" width="820">
<br><br>
<img src="docs/assets/structured-notes.jpg" alt="结构化笔记里的标注块、表格与引用" width="820">
</div>

## 随处一致

<div align="center">

<img src="docs/assets/everywhere.jpg" alt="编辑、阅读视图、PDF 导出与手机" width="820">

### 手机上

<img src="docs/assets/mobile.gif" alt="手机上的 Ignorance：阅读、中英文笔记与八套配色" width="360">

</div>

## 特点

- **排版优先**：系统字体（苹方 / 微软雅黑）、随窗口调整的阅读栏、宽松行高、清晰的 H1–H6 层级，实时预览、阅读视图和导出保持一致。
- **讲究的内容块**：粗竖线引用、表头更醒目并带浅色斑马纹的表格、带标题栏/行号/语法着色的代码块、多种色调的标注块、圆形任务复选框、脚注，以及跟随 Obsidian `--highlight-background-*` 变量的六色高亮。
- **浅色与深色一起设计**，对比度经过校准；也可以让 Obsidian 自带的强调色接管。
- **手机端**：更紧凑的间距、可横向滚动的表格、适合手指的控件。
- **打印与 PDF**：自动隐藏侧栏和控件，导出与屏幕所见一致。
- **尊重你的设置**：遵循"减少动态效果"，以及你的字体与字号选择。

## 安装

**在 Obsidian 内**：设置 → 外观 → 主题 → 管理 → 搜索 "Ignorance" → 安装并使用。（[主题页面](https://community.obsidian.md/themes/ignorance)）

**手动安装**：从[最新发布](https://github.com/ignorance-shiyao/obsidian-ignorance/releases/latest)下载 `theme.css` 与 `manifest.json`，放入 `<库>/.obsidian/themes/Ignorance/`，然后在 设置 → 外观 选择 *Ignorance*。

## 推荐：配套插件

主题可独立使用，但部分外观依赖配套插件。再装 **[Ignorance Advanced](https://community.obsidian.md/plugins/ignorance-advanced)** 可获得配色切换、Mermaid 与 ECharts 增强、表格与图片工具、分页阅读、演示（PPT 视图与 PPTX 导出）和多种导出。

**只装主题时**：正文、标题、引用、标注块、表格、代码块、八套配色中的默认 Azure 都完整可用。

**需要插件才有的外观**：Mermaid 图表配色、图表与 `:::` 容器、幻灯片、阅读器与分页、导出样式，以及依赖插件打标记的几处细节（图片按 alt 对齐、6 列以上宽表的紧凑布局、仅含一个代码的单元格、带图链接不加箭头、文件树图标）。

## 说明

- 不内置字体；回退字体为 Noto Sans CJK SC。
- 按笔记切换版式：在笔记属性 `cssclasses` 里写 `ib-wide`（加宽）、`ib-narrow`（收窄）、`ib-compact`（段落更紧凑）、`ib-no-title`（隐藏内联标题）。
- 只想让表格或图片变宽、正文保持窄栏（阅读视图）：在 `cssclasses` 里写 `ib-wide-tables` 或 `ib-wide-images`；手机和窄窗格里自动保持栏宽。
- 支持 [Style Settings](obsidian://show-plugin?id=obsidian-style-settings) 插件：可调正文宽度与宽块宽度、标题字体、标题层级标签、引用字号、代码长行折行、表格字号与斑马纹、紧凑侧栏，以及代码块、标注块、表格的圆角和引用竖条宽度。启用 Ignorance Advanced 时，它自己的字体与标题标签设置优先。
- 白板（Canvas）与关系图谱的颜色跟随主题（白板背景、网点、卡片标签；图谱的连线、节点、标签和附件）。
- 自带视图的第三方插件可能保留自己的样式。
- `docs/style-check.md` 覆盖所有元素，可复制到库里检查主题效果。

## 开发

`src/theme.css` 是可读源码，`theme.css` 是它的压缩构建产物。

```bash
npm ci && npm run build                      # 重新生成 theme.css
scripts/install-to-vault.sh /path/to/vault   # 把 theme.css 和 manifest.json 拷进库
```

## 反馈

使用中遇到问题，或有功能需求，欢迎[提交 issue](https://github.com/ignorance-shiyao/obsidian-ignorance/issues)；附上截图和 Obsidian 版本会更容易定位。

## 支持

如果你喜欢这个主题，欢迎请我喝杯咖啡，谢谢！

| 微信 | 支付宝 |
| --- | --- |
| ![微信](docs/assets/coffee-wechat.png) | ![支付宝](docs/assets/coffee-alipay.png) |

## 许可

[MIT](LICENSE)。
