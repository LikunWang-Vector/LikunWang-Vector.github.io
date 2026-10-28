# Likun Wang · 王立坤 — Personal Website

个人主页，中英双语，基于 Hugo 与 Hugo Blox 构建，部署在 GitHub Pages。

**Live:** <https://likunwang-vector.github.io/>

---

## 这个站点包含什么

- **双语内容**：英文（根路径）与中文（`/zh/`），所有页面一一对应。
- **语言栏**：中英原生页面 + Google Translate 当页翻译（不跳转、无需 key），国内直接看中文，海外访客选择其他语言。
- **作品与研究**：项目卡片、论文页、演讲页、经历与教育时间线、教学与指导。
- **交互式旅行页**：自托管的 globe.gl 3D 地球、人生轨迹、去过的国家；外部访客地图按需加载。
- **定制设计**：卡片、论文引用、时间线、联系方式、深浅色主题、移动端布局。
- **完整资源**：项目/文章封面、favicon、Open Graph 分享图、中英文一页简历 PDF。

## 技术栈

| 部分 | 方案 |
|------|------|
| 静态站点 | Hugo **0.136.5 extended** |
| 主题 | Hugo Blox `blox-tailwind` **v0.3.1**（Hugo Modules） |
| 样式 | 主题 Tailwind + 自定义 CSS（`assets/css/`） |
| 交互 | 原生 JavaScript（`assets/js/site.js`），无前端框架 |
| 3D 地球 | [globe.gl](https://github.com/vasturiano/globe.gl)（自托管） |
| 搜索 | [Pagefind](https://pagefind.app/)（构建时生成索引） |
| 部署 | GitHub Actions → GitHub Pages |

## 本地开发

需要安装：

1. **Hugo 0.136.5 extended**（注意必须是 extended 版本）
2. **Go 1.20+**（Hugo Modules 需要）

```bash
# 检查
hugo version   # 应显示 v0.136.5 ... +extended
go version

# 启动
hugo server
```

访问 <http://localhost:1313/>。

中国大陆网络下，Go module 下载可以改用镜像：

```bash
export GOPROXY="https://goproxy.cn,direct"
export GOSUMDB="sum.golang.google.cn"
hugo server
```

生产构建：

```bash
hugo --minify
npx pagefind --site public
```

> 搜索在本地开发时不会工作，因为 Pagefind 索引只在构建后生成。部署工作流会自动执行这一步。

## 目录结构

```
config/_default/
  hugo.yaml            # 站点、语言、markup、security
  params.yaml          # 外观、SEO、导航、翻译配置
  menus.yaml           # 英文菜单
  languages.yaml       # 中英文内容目录、中文菜单
content/en/            # 英文内容
content/zh/            # 中文内容（路径与英文对应）
assets/
  css/custom.css       # 主设计层
  css/pages.css        # 经历/列表/奖项等页面
  css/travel.css       # 地球与访客地图
  js/site.js           # 翻译引擎、复制、移动端导航等
  media/covers/        # 项目、文章、论文、演讲封面
  media/hero-bg.svg    # 首屏背景
  media/icon.png       # favicon / site icon
  media/sharing.png    # 默认 Open Graph 分享图
layouts/
  partials/views/      # 自定义卡片、论文引用、演讲卡片
  partials/components/ # 导航栏与翻译按钮
  partials/blox/       # Markdown 区块覆盖
  shortcodes/          # 3D 地球、访客地图
  _default/list.html   # 列表页（博客/论文/演讲）
 404.html
static/
  js/globe.gl.min.js   # 自托管地球库
  img/earth-*.webp     # 自托管地球贴图
  uploads/resume*.pdf  # 中英文简历
tools/
  art/                 # 封面 / OG 图 / 贴图生成脚本
  resume/              # 双语简历生成脚本
docs/
  translation.md       # Google 当页翻译说明
```

## 内容维护

### 新增项目 / 文章 / 论文 / 演讲

- 在 `content/en/` 与 `content/zh/` 下**同时**创建相同路径的页面包，例如：
  `content/en/project/my-project/index.md` 和 `content/zh/project/my-project/index.md`。
- 封面放在 `assets/media/covers/`，在 front matter 中引用：

```yaml
image:
  filename: covers/my-project.png
  caption: ...
```

- 项目首页的“精选项目”使用 `featured: true` 过滤；`projects/` 页面显示全部。
- 论文页可以添加 `coauthors`、`bibtex` 字段，论文卡片会自动渲染作者和 BibTeX 引用按钮。

### 语言切换

所有页面的中英互链来自 Hugo 的 translation 机制：只要两种语言下存在**相同路径**，翻译按钮就会显示“原文版本”链接。没有对应翻译的页面只会显示机器翻译选项（若已配置）。

### 菜单

Hugo 的父子菜单使用 `parent` + `identifier`，不是嵌套 `children`：

```yaml
- name: More
  identifier: more
- name: Teaching
  url: teaching/
  parent: more
```

中文菜单在 `config/_default/languages.yaml` 的 `zh.menu.main`。

### 简历

简历源在 `tools/resume/build.mjs`（数据 + 排版），输出到：

- `static/uploads/resume.pdf`（英文）
- `static/uploads/resume-zh.pdf`（中文）

重新生成：

```bash
cd tools/resume
npm install
node build.mjs
# 或指定 Chrome 路径
CHROME_PATH="/path/to/chrome" node build.mjs
```

旧版简历保留在 `static/uploads/archive/resume-2025-07.pdf`。

### 封面 / 分享图 / 地球贴图

```bash
cd tools/art
npm install
node generate.mjs        # 重新生成封面 SVG + PNG、hero 背景、icon
node generate-og.mjs     # 重新生成 assets/media/sharing.png
node fetch-textures.mjs  # 重新下载并压缩地球贴图
```

## 语言栏：中英原生 + Google 当页翻译

- 语言栏默认包含 **English / 中文（简体）**；这两套是人工撰写的原生页面。
- 其他语言（日本語、한국어、繁體中文、Français、Deutsch、Español、Русский、Português）点击后由 **Google Translate Element** 在当前页面内翻译，**不跳转、不打开新标签页**。
- Google 脚本只在第一次选择其他语言时加载；不需要 API key、CORS、代理或 GitHub Secrets。
- 国内读者直接使用中文版；Google 无法访问时，其他语言按钮不会生效，但不影响页面本身。
- 语言列表在 `config/_default/params.yaml` 的 `features.translation.google.languages`。
- 面板不显示额外说明，语言列表本身就是入口。技术说明见 **[docs/translation.md](docs/translation.md)**。

## 部署

推送到 `main` 后，`.github/workflows/publish.yaml` 会自动：

1. 用 Hugo 构建（语言栏不需要任何 Secrets）；
2. 运行 Pagefind 生成搜索索引；
3. 发布到 GitHub Pages。

如使用自定义域名，修改 `config/_default/hugo.yaml` 的 `baseURL`，并在 GitHub Pages 设置中配置域名。

## 内容修订记录（请确认）

在整理内容时发现了几处与旧简历不一致的地方，已按旧简历修正：

- **WCSMO-16 地点**：由 Dubrovnik, Croatia 改为 **Kobe, Japan**（旧简历写的是 Kobe；如实际为克罗地亚，请改回 `content/*/event/wcsmo16/index.md` 与旅行页）。
- **奖学金**：由 “MEXT Scholarship（全额）” 改为 **Monbukagakusho Honors Scholarship (JASSO)**，金额 ¥288,000（依据旧简历）。
- **剑桥冬季项目**：加入教育经历与旅行页（英国）。如果该项目是线上进行，请从旅行页的“去过的国家/轨迹”中移除 Cambridge。
- **腾讯游戏策划公开课**：日期改为 **2022 年 11 月**（依据旧简历）。
- **联系方式**：README 中的手机号已移除，站点只展示邮箱、GitHub、LinkedIn、Google Scholar、CSDN、微信。如简历需要电话，可在 `tools/resume/build.mjs` 中补充。
- 目前使用早稻田邮箱 `vector_kun@ruri.waseda.jp`；如毕业后失效，请替换 `content/*/authors/admin/_index.md`、首页联系区与简历脚本中的邮箱。

## 许可与致谢

- 站点代码：MIT（见 `LICENSE.md`）
- 主题：[Hugo Blox Builder](https://hugoblox.com/)
- 地球：[globe.gl](https://github.com/vasturiano/globe.gl)、[three-globe](https://github.com/vasturiano/three-globe)（NASA Blue Marble / Earth at Night 贴图）
- 图标：内联 SVG，部分路径来自 [Lucide](https://lucide.dev/)（ISC）
