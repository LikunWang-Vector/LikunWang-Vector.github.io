# Likun Wang · 王立坤 — Personal Website

个人主页，中英双语，基于 Hugo 与 Hugo Blox 构建，部署在 GitHub Pages。

**Live:** <https://likunwang-vector.github.io/>

---

## 这个站点包含什么

- **双语内容**：英文（根路径）与中文（`/zh/`），所有页面一一对应。
- **CSDN 归档**：151 对中英双语教程迁移到 `/csdn/`，保留原文链接与阅读数据。
- **REALME 炫酷主页**：导航栏右侧的 `✦ REALME` 按钮通往 `/realme/`——一个独立的 WebGL 霓虹终端版主页（Three.js 着色器背景、GSAP/Lenis 动效、可换装、会跟随鼠标的 DeepSeek 鲸鱼娘看板娘），与正式站点共用同一份 Markdown 内容但完全独立渲染。
- **语言栏**：中英原生页面 + Google Translate 当页翻译（不跳转、无需 key），国内直接看中文，海外访客选择其他语言。
- **作品与研究**：项目卡片、论文页、演讲页、经历与教育时间线、教学与指导。
- **交互式旅行页**：自托管的 globe.gl 3D 地球、人生轨迹、去过的国家；外部访客地图按需加载。
- **定制设计**：编辑式学术排版——暖纸色页面与深色首屏、英文衬线标题、自动编号的章节、论文条目化列表、深浅色主题、移动端布局。
- **轻量动效**：滚动出现、顶部阅读进度条与跨页面 View Transitions，全部为渐进增强，尊重 `prefers-reduced-motion`。
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

## 学术主页视觉层

首页采用编辑式（editorial）排版：暖纸色背景、深色首屏、英文衬线标题与自动编号的章节。它是在主题之上加的一层覆盖，不改 Hugo Blox 源码：

- `assets/css/editorial.css` 最后加载，负责设计 token、首屏、章节节奏、论文/文章/演讲版式、列表页标题、响应式与深色模式。
- 首屏 biography 由项目内的 `layouts/partials/blox/resume-biography-3.html` 覆盖，姓名与简介移到宽栏，头像、所属机构与社交链接留在侧栏。
- 英文标题使用自托管的 [Source Serif 4](https://github.com/adobe-fonts/source-serif)（Latin / Latin-ext，SIL OFL 1.1）；中文标题继续使用 Inter + 系统中文字体，避免跨平台 CJK 衬线差异。
- 滚动出现与阅读进度条由 `assets/js/site.js` 提供；跨页面淡入使用 CSS `@view-transition`，导航栏作为命名元素保持固定。
- 动效是渐进增强：没有 JavaScript 时内容直接可见，`prefers-reduced-motion: reduce` 下关闭出现动画、进度条过渡与 View Transitions。
- 排版参考 [al-folio](https://github.com/alshedivat/al-folio)（MIT）与 [AcademicPages](https://github.com/academicpages/academicpages.github.io)（MIT）的信息架构。

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
content/*/csdn/        # 151 对 CSDN 迁移文章（由 tools/csdn-migrate 生成）
assets/
  css/custom.css       # 主设计层
  css/editorial.css    # 学术主页编辑式视觉层（最后加载）
  css/pages.css        # 经历/列表/奖项等页面
  css/travel.css       # 地球与访客地图
  fonts/               # 自托管 Source Serif 4 + OFL 许可
  js/site.js           # 翻译引擎、复制、移动端导航、滚动出现/进度条等
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
  csdn-migrate/        # CSDN 归档迁移与代码块修复脚本
realme/                # 独立的前端子应用，构建后挂到 /realme/
  src/                 # Three.js 着色器、GSAP/Lenis 动效、内容浏览器、看板娘衣柜
  scripts/             # build-content.mjs：把 Hugo 的 Markdown 渲染成 JSON + 文章片段
  public/mascot/       # 鲸鱼娘素材：女仆三形态 + 大肥鱼两模式 Live2D、大肥鱼精灵图、每形态 3 套配色
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

### CSDN 归档

`content/en/csdn/` 与 `content/zh/csdn/` 下的 151 对文章由脚本生成，**不要手工编辑**：重新运行脚本会覆盖。来源是 `D:/Projects/hexo-blog`（可用 `CSDN_SOURCE` 指向其他位置）：

```bash
cd tools/csdn-migrate
npm install
node migrate.mjs        # 重新生成全部文章、封面与图片
node repair-code.mjs    # 从 CSDN 原文恢复代码块换行（需要联网，约 5–10 分钟）
node legacy-redirects.mjs  # 为旧 Hexo 链接生成跳转页
```

说明：

- 文章 slug 取自英文文件名，中英共用同一路径，因此语言切换能正确互链。
- 图片按原样复制到 `static/images/`，不做压缩（截图文字清晰度优先）；未被引用的图片不会复制。
- 缺失的图片会生成占位图；`report.json` 与 `repair-report.json` 记录每次运行的结果。
- 旧 Hexo 链接（`/YYYY/MM/DD/zh-CN/…`、`/YYYY/MM/DD/en/…`）由 `legacy-redirects.mjs` 生成跳转页保留，共 302 条。
- 迁移细节与已知取舍见 [tools/README.md](tools/README.md)。

### REALME 炫酷主页（`/realme/`）

`realme/` 是一个**不经过 Hugo 渲染**的独立前端应用（Vite + TypeScript），有自己的一套内容管线：`scripts/build-content.mjs` 直接读取 `content/en/{post,csdn,publication,project}/**/index.md`，用 markdown-it 渲染成 `public/content/` 下的 JSON 索引与文章片段，前端再在 `#/blog`、`#/archive`、`#/papers`、`#/projects`、`#/travel` 中展示。Hugo 与 REALME 共用同一份 Markdown 源，但各自渲染，互不影响：改主页不会重建 600+ 页面，改博客也不会碰动效代码。

开发时需要两个终端：Hugo 提供图片与学术页（1313），Vite 提供 REALME（5173，并把 `/post`、`/csdn`、`/publication`、`/project`、`/media`、`/images` 代理到 Hugo）。`config/development/params.yaml` 里的 `realme.url` 让导航栏在开发模式下直接指向 Vite。

```bash
# 终端 1：Hugo（图片、学术站）
hugo server --bind 127.0.0.1 --port 1313

# 终端 2：REALME
cd realme
npm install
npm run dev      # http://127.0.0.1:5173/realme/
npm run build    # tsc --noEmit && vite build → realme/dist
```

- 内容：中英各 158 篇（151 CSDN 归档、2 博客、4 项目、1 论文），全部来自 Hugo 的 Markdown，不重复维护；REALME 自行渲染 `public/content/{en,zh}/`，同一篇内容可跟随语言开关切换。
- 语言：REALME 顶栏有 EN / 中 分段开关，选择保存在 localStorage；正文列表、日期、文章、旅行地图与页面标题都会随之切换。首次进入按浏览器语言决定，之后再进入沿用上次选择。语言胶囊位于顶栏右侧固定槽位、两段等宽，切换语言时位置与尺寸不变（窄屏时其后只有固定尺寸的 ≡ 按钮）；当前栏目在导航中带 `aria-current` 高亮，960px 以下收进 ≡ 下拉菜单。
- 开屏：终端开屏每个标签页只完整播放一次（`sessionStorage`）；同一标签页内返回 REALME 时改为约 0.3 秒的“正在重连”淡出，站内 hash 跳转不会重播。
- 自适应：根字号随视口在 14–17px 之间流动，正文铺满阅读容器（不再限制 84ch 造成右侧大片留白），并带视口相关字号；补充了中文字体回退与更大的看板娘对话字号。
- 入口按钮：导航栏右侧的 `✦ REALME` 胶囊按钮（[navbar.html](layouts/partials/components/headers/navbar.html) + `assets/css/custom.css` 中的 `.lgc-realme`），"More" 菜单里也有对应条目。
- 技术：Three.js 着色器背景、GSAP + ScrollTrigger、Lenis 惯性滚动、自定义光标与文字乱码解码。
- 旅行：`#/travel` 用 MapLibre GL JS 渲染 OpenFreeMap 深色底图（无需 API key），支持深度缩放（到街道级）、拖拽、点击节点飞行定位，以及每段行程的交通方式切换（飞机 / 火车 / 汽车 / 轮船）；数据与正式站的 `globe-trajectory` / `visited-countries` 短代码共用根目录的 `data/travel.json`，交通选择存于 localStorage。底图 © OpenStreetMap contributors。
- 看板娘：社区标准 DeepSeek 鲸鱼娘形象，只保留两种公认形态——女仆与大肥鱼；两者都没有具体人名，女仆称访客「主人」，大肥鱼没有自称。女仆有三种开源表现，对应衣柜「形象」中的三个选项：「标准」为中肥鱼（Mao绒绒家园，15 个表情，标准短裙女仆装）、「成年」为成年肥鱼（玹乐喵，4 个表情，长裙）、「Q版」为氵六青 c_0120（8 组动作、44 个表情）；标准与成年模型没有动作组，播放器用程序化轻摆配合表情回应。大肥鱼默认 jinglan 8×11 精灵图（更可爱的 Q 版画风），可切换狐宫静独立 Live2D「大肥鱼」（6 组动作、16 个表情）；模型失败时回退精灵图。每个形态都有蓝 / 绿 / 红三套配色。视线跟随覆盖**整个页面**，而不是只在看板娘附近；指针停住时保持当前方向。点右下角「衣」打开衣柜，上半部分「形象」直接列出五个选项（女仆 · 标准 / 成年 / Q版，大肥鱼 · 精灵图 / Live2D），下半部分「颜色」只显示当前形象的蓝 / 绿 / 红三色；选择都保存在 localStorage；模型加载失败时回退为同配色静态立绘。点击会在当前形态的所有互动中轮换，不会只随机到同一个动作。形象链：上善无形原创鲸鱼娘 → ZipZipPipe 女仆鲸鱼娘 → 氵六青 Q 版 Live2D；大肥鱼原型来自 这个刀子真甜，独立大肥鱼 Live2D 由 狐宫静制作（公开免费皮套），精灵图来自 oujnit（MIT）。中肥鱼 / 成年肥鱼 / Q肥鱼模型素材来自 [Alps-Link/deepseek-whale-Desktop-pet](https://github.com/Alps-Link/deepseek-whale-Desktop-pet) 桌宠包，均为非商业 CC 同人作品（Q肥鱼为 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)，中肥鱼 / 成年肥鱼具体版本以作者发布页为准），需保留署名、禁止商用倒卖；本项目非 DeepSeek 官方产品。
- 降级：`prefers-reduced-motion` 下停止待机动画与视线跟随、关闭随机台词（换装仍会重绘一帧）；页面 `noindex` 且不进入 Pagefind 索引。
- 详细说明与素材许可见 [realme/README.md](realme/README.md)。

### 语言切换

所有页面的中英互链来自 Hugo 的 translation 机制：只要两种语言下存在**相同路径**，翻译按钮就会显示“原文版本”链接。没有对应翻译的页面只会显示机器翻译选项（若已配置）。

REALME 不依赖 translation 链接，它在顶栏有独立的 EN / 中 开关，可即时切换首页、文章列表、正文与旅行地图（详见上方 REALME 条目）。

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

1. 在 `realme/` 中运行 `npm ci && npm run build`（必须先于 Hugo：`module.yaml` 把 `realme/dist` 挂载为 `static/realme`）；
2. 用 Hugo 构建学术站，`realme/dist` 会一并发布到 `/realme/`；
3. 运行 Pagefind 生成搜索索引；
4. 发布到 GitHub Pages。

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
- 英文字体：[Source Serif 4](https://github.com/adobe-fonts/source-serif)，SIL Open Font License 1.1（全文见 `assets/fonts/OFL-Source-Serif-4.md`）
- 地球：[globe.gl](https://github.com/vasturiano/globe.gl)、[three-globe](https://github.com/vasturiano/three-globe)（NASA Blue Marble / Earth at Night 贴图）
- 图标：内联 SVG，部分路径来自 [Lucide](https://lucide.dev/)（ISC）
