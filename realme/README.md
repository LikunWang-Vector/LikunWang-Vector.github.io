# REALME — neon edition

An independent, WebGL-flavoured take on the site, served at
<https://likunwang-vector.github.io/realme/>.

It is **not** rendered by Hugo. REALME has its own content pipeline: it reads
the same Markdown files Hugo uses and renders them itself. Hugo builds the
formal site into `public/`; `module.yaml` mounts `realme/dist` as
`static/realme`, so one `hugo` run publishes both. The two are linked by a
button in the main site's navbar.

## Stack

| Piece | What it does |
|---|---|
| Vite + TypeScript | build & dev server (`base: /realme/`) |
| Three.js | full-screen neon grid / plasma shader background |
| GSAP + ScrollTrigger | reveals, counters, text scramble |
| Lenis | inertial smooth scrolling |
| MapLibre GL JS + OpenFreeMap | deep-zoom travel atlas (`#/travel`) with per-leg transport modes |
| markdown-it + gray-matter + highlight.js | independent Markdown renderer for the content browser |
| `@fontsource/*` | self-hosted JetBrains Mono + Orbitron |

## Content pipeline

`scripts/build-content.mjs` reads
`../content/{en,zh}/{post,csdn,publication,project}/**/index.md` and writes:

- `public/content/index.json` — 316 entries (158 per language: 151 CSDN archive,
  2 blog, 4 projects, 1 paper), each tagged `en` or `zh` with a canonical
  `/zh/...` URL for Chinese
- `public/content/<lang>/<route>/<slug>.html` — pre-rendered article fragments
- `public/content/travel.json` — copied from `../data/travel.json`, the same
  file the Hugo globes read

The script runs automatically via `predev` and `prebuild`, so `npm run dev` and
`npm run build` always see the current Markdown. The front end fetches the index
once and renders `#/blog`, `#/archive`, `#/papers`, `#/projects`, plus
`#/<route>/<slug>` article views. No Hugo HTML is reused.

## Language switch

The header carries an EN / 中 segmented control (`src/i18n.ts`). The choice is
stored in `localStorage['realme:lang']`; a first-time visitor follows
`navigator.language` (Chinese browsers start in Chinese, everyone else in
English).

- The fixed landing skeleton is translated by walking `[data-i18n]` and
  `[data-i18n-aria]` attributes.
- The content browser filters the index by language, localises dates, route
  names, search/loading/error copy, and re-renders an open article in place when
  the switch is used.
- The travel atlas localises its chrome and swaps primary/secondary place names
  (the alternate-language name stays visible on pins and in the node list).
- `document.documentElement.lang` and the page title/meta description follow the
  selection.

## Navigation

The fixed header has three stable slots: brand, section links, and the exit +
language controls. The EN / 中 switch is a two-button segmented group in a
fixed right-hand slot; below 960 px only the fixed-size ≡ toggle follows it.
Both segments have a fixed width and the exit link has a fixed minimum width,
so a language change never moves the language hit target — the pill stays under
the pointer. The switch is a `role="group"` of real buttons with `aria-pressed`,
reachable and operable by keyboard.

The section links mark the current route with `aria-current="page"` and a lit
underline. Below 960 px the same links collapse into an opaque dropdown opened
by the ≡ button: focus moves to the first link, Escape (or a click outside)
closes it and returns focus to the toggle, and choosing a link closes it. The
language switch and exit link stay in their fixed slots in the mobile bar.
Every header control has a visible `:focus-visible` outline.

## Boot sequence

The terminal boot runs **once per browser tab**. `main.ts` records
`sessionStorage['realme:booted']` before the first boot; later full page loads
within that tab get `runQuickBoot()` — a 240 ms “reconnecting … OK” card that
fades out in about half a second. Hash navigation inside REALME never remounts
the overlay, so returning from an article or the formal blog stays seamless.
`prefers-reduced-motion` skips both variants.

## Typography and width

The root font size is fluid (`clamp(14px, 0.18vw + 13.4px, 17px)`), so all
`rem`-based UI and prose scales with the viewport. The article prose fills the
full width of the view shell (matching the header rule instead of stopping at a
fixed character count), and the shell itself grows with `--max`
(`clamp(1080px, 88vw, 1560px)`). CJK fallbacks (PingFang SC / Hiragino Sans GB /
Microsoft YaHei / Noto Sans SC) are appended to the mono and display stacks, so
Chinese copy keeps the same rhythm as the Latin terminal face. The mascot
speech bubble is sized at `1rem` (up to 360px wide) so Chinese dialogue stays
readable.

## Travel atlas

`#/travel` is loaded on demand (`src/travel.ts`). It draws the route from
`data/travel.json` with MapLibre GL JS and the keyless OpenFreeMap dark style,
so it zooms to street level (maxZoom 18) and needs no API key or account.

- A great-circle line is drawn per leg, filtered by transport mode: air, rail,
  road or sea.
- Clicking a mode button on a leg recolours the line and recalculates the
  distance/time estimate; the choice is stored in
  `localStorage['realme:travel:modes']`.
- Clicking a pin or a node flies the camera to that city; `fit route` returns to
  the whole journey. At wide zoom only the dots are labelled, so labels never
  collide or clip on a phone.
- MapLibre's worker is imported as a Vite asset (`?url` + `setWorkerUrl`) so the
  worker resolves both in dev and in the hashed production bundle.
- The mode speeds are illustrative, not a travel log — the UI says so. Basemap
  © OpenStreetMap contributors, rendered with MapLibre; OpenFreeMap attribution
  is in the map corner and in `src/travel.ts`/`.css`.

The view is disposed (`map.remove()`) when the hash leaves `#/travel`, so
returning never stacks WebGL contexts.

## Develop

Two terminals are needed: Hugo serves images and the formal site on 1313, Vite
serves REALME on 5173 and proxies `/post`, `/csdn`, `/publication`, `/project`,
`/media` and `/images` to Hugo so article images resolve.

```bash
# terminal 1 — repo root
hugo server --bind 127.0.0.1 --port 1313

# terminal 2
cd realme
npm install
npm run dev     # http://127.0.0.1:5173/realme/
```

In development the navbar links straight to the Vite server
(`config/development/params.yaml` → `realme.url`). In production the parameter
is unset and the navbar uses `/realme/`.

## Build

```bash
cd realme
npm run build   # tsc --noEmit && vite build → realme/dist
```

The deploy workflow (`.github/workflows/publish.yaml`) runs this **before**
Hugo, then Hugo mounts the output at `/realme/`.

## Mascot & wardrobe

The mascot is the community DeepSeek whale girl (鲸鱼娘), animated rather than a
static portrait. Two accepted forms remain — the black-gown (黑色华服) design
was dropped because it is not part of the recognised lineage. The maid's
**成年** mode below is the standard-proportion adult 肥鱼 from the open-source
pack, not that black-gown design.

| Form | Actor | Colourways |
|---|---|---|
| 女仆 (`maid`) | Three switchable modes: **标准** (`medium`, Live2D by Mao绒绒家园; 15 expressions, no motion clips — procedural sway and expression reactions), **成年** (`adult`, Live2D by 玹乐喵; 4 expressions, custom rig) and **Q版** (`c_0120`, Live2D by 氵六青; 8 motion groups, 44 expressions). She has no personal name and calls the visitor 主人. | blue / green / red texture atlases per mode |
| 大肥鱼 (`chibi`) | defaults to the jinglan 8×11 sprite sheet (73 poses, 9 action rows, 16 gaze directions); the wardrobe can switch to the independent Live2D “大肥鱼” by 狐宫静 (6 motion groups, 16 expressions, head/eye/body tracking). | blue / green / red texture atlases |

Character lineage: **上善无形** created the original whale-girl OC;
**ZipZipPipe** fused her with the DeepSeek motif into the maid design;
**氵六青** made the c_0120 Live2D rig, motions and expressions. The 中肥鱼
(`medium`) rig is by **Mao绒绒家园** and the 成年肥鱼 (`adult`) rig by
**玹乐喵**; both come from the 大肥鱼 desktop-pet pack
[Alps-Link/deepseek-whale-Desktop-pet](https://github.com/Alps-Link/deepseek-whale-Desktop-pet)
and are expression-only (no motion clips). The 大肥鱼 design is credited to
**这个刀子真甜**; the independent 大肥鱼 Live2D is by **狐宫静** (“大肥鱼”,
distributed as a public free model through the same pack). **oujnit**'s
MIT-licensed
[jinglan pack](https://github.com/oujnit/jinglan-whale-maid-pet) supplies the
default 大肥鱼 sprite sheet. Reference images for the accepted forms live in
[Iphsiibl/deepseek-whale-girl-gallery](https://github.com/Iphsiibl/deepseek-whale-girl-gallery).
Neither character uses a personal name in the UI:
the maid is simply 女仆 and the Q form is simply 大肥鱼.

### How the actor works

- The static WebP poster paints immediately. The animated actor is created
  afterwards and crossfades in via `.mascot.has-actor`; if WebGL or the model
  fails, the poster stays (`.mascot.is-fallback`).
- **Maid**: three pre-built profiles share one PIXI player (PIXI 6.5.10,
  pixi-live2d-display 0.4.0 and the Cubism 4 runtime load on demand only when
  the maid form is selected). The three 女仆 chips switch between **标准**
  (`live2d/medium/`, about 1.7 MB first load: 1.2 MB moc3 + 0.37 MB blue
  atlas), **成年** (`live2d/adult/`, about 7.3 MB: 6.4 MB moc3 + 0.73 MB
  atlas — the largest optional download) and **Q版** (`live2d/q/`, about
  1.7 MB). Green/red atlases add roughly 0.38 MB (标准) or 0.74 MB (成年) when
  picked. 标准 and 成年 are expression-only rigs: the player omits
  `idleMotionGroup`, adds a slow procedural sway on `angleZ` / `bodyX`, and
  turns clicks into expressions (15 for 标准, 4 for 成年). 成年's rig uses
  custom IDs (`BodyAngleX/Y`, `EyeBallX/Y`), so it carries its own `Live2DRig`.
  标准's atlas contains the author's “免费使用 请勿倒卖” watermark;
  `baseParameters` forces `Paramcol_3 = 1` every frame (and once before the
  first paint, which matters under reduced motion), hiding it without editing
  the texture. Q版 keeps the original rig, 8 motion groups and 44 expressions;
  clicking plays a prop-matched motion. The c_0120 package is distributed
  through
  [Andersen216/dsh-whale-girl-live2d](https://github.com/Andersen216/dsh-whale-girl-live2d)
  (plugin code MIT; the model assets keep the CC terms below).
- **大肥鱼**: the Q-style chibi defaults to the jinglan sprite sheet, because
  that look is the cutest of the available forms. The two 大肥鱼 chips switch
  between **精灵图** (default) and **Live2D**. The Live2D option loads the
  independent model (`live2d/q/`) by 狐宫静 — about 1.7 MB first load (moc3 +
  three blue textures), six motion groups (idle, first impression, touch,
  action, sleep, scene) and sixteen expressions. The player deliberately uses
  only the facial sets (`smile`, `star_eyes`) and skips the prop expressions
  (token, bubble, basin, love ring), so the character stays unobstructed. If
  the Live2D fails, the same sprite sheet takes over. The sprite keeps its 9
  action rows and 16 gaze directions at 22.5° steps.
- All actors track the pointer across the **whole page**, not just the stage:
  the direction is measured from the character centre and normalised against
  the viewport half-size, so the head keeps turning even when the cursor is at
  the far edge. Direction is held while the pointer is still, and reset when it
  leaves the window. The sprite holds its gaze frame until the next move instead
  of timing out after 1.4 s.
- The wardrobe has just two sections, opened with the 「衣」 button or the
  keyboard: **形象** lists the five looks as chips (女仆 · 标准 / 成年 / Q版,
  大肥鱼 · 精灵图 / Live2D), and **颜色** shows only the three colourways of
  the look currently on stage. Thumbnails, titles and the stage caption follow
  the selection, so there is no second grid of categories to parse. Both forms
  keep the same three colours. Each choice is stored separately
  (`realme:mascot:maidmode`, `realme:mascot:qmode`), together with the form,
  colour and visibility (`realme:mascot:form`, `realme:mascot:colour`,
  `realme:mascot`). Clicking a mode that is already active still switches to
  that form if the other form is showing.
- Clicking cycles through every reaction for the current form before repeating
  one, so all the motions and expressions are reachable instead of relying on a
  lucky random draw. The per-mode shuffle bags are kept separately, so 标准,
  成年 and Q版 each exhaust their own reaction set.
- Colour variants are pre-tinted at asset-build time with
  [`scripts/convert-mascot-forms.mjs`](scripts/convert-mascot-forms.mjs): only
  blue-hued pixels rotate hue. The pre-tinted 2048² WebP atlases cover all
  three maid modes and 大肥鱼; 标准 / 成年 are converted from the pack's 4096²
  PNGs with `npm run mascot:forms -- <pack>/forms`. Skin, line
  art, props and the white apron stay identical across colourways.
- `prefers-reduced-motion` stops the idle loops and gaze tracking and disables
  random lines, but a colour change still repaints one frame so the wardrobe
  remains usable. Expression-only rigs keep their base parameters applied
  before that single frame, so the 标准 watermark stays hidden. The panel is
  layered above the mascot (`z-index` 70) and sized to stay clear of the fixed
  header; viewports under 560 px tall switch it to a right-side drawer below the
  header.

**Licence layering.** The 女仆 character design is © 上善无形 / ZipZipPipe; the
Q版 Live2D artwork is © 氵六青 and distributed as
[**CC BY-NC-SA 4.0**](https://creativecommons.org/licenses/by-nc-sa/4.0/) —
attribution, non-commercial, share-alike; changes (colour tinting and the web
player) are noted here. 中肥鱼 (标准) is by **Mao绒绒家园**
and 成年肥鱼 (成年) by **玹乐喵**; both are distributed as non-commercial CC fan
works through the 大肥鱼 desktop-pet pack, with the exact licence version
deferred to each author's release page. The 大肥鱼 Live2D is a public free model
by **狐宫静**, redistributed under the same **CC BY-NC-SA 4.0** non-commercial
terms as the pack it comes from; the model's own usage note says it is a free
public model and forbids resale. The jinglan sprite sheet is MIT © oujnit,
while the chibi character design is credited to 这个刀子真甜. PIXI and
pixi-live2d-display are MIT; the Live2D Cubism Core is Live2D Inc.'s
proprietary redistributable runtime. This is a non-commercial fan project, not
an official DeepSeek product. Attribution is shown in the wardrobe panel; keep
it in place when deploying.

## Accessibility & performance notes

- `prefers-reduced-motion` disables the boot animation, smooth scroll, cursor
  effects, scroll reveals and mascot motion; the shader renders one static frame.
  The travel map uses instant camera jumps instead of flights.
- The travel map is keyboard-reachable: pins, node buttons, leg mode buttons and
  `fit route` are real buttons, and leaving `#/travel` removes the map.
- The shader is capped at 1.6× DPR and pauses when the tab is hidden.
- The page is `noindex` with a canonical URL pointing at the main site, and is
  excluded from Pagefind (`data-pagefind-ignore`), so it never competes with the
  formal pages in search.
- All assets (fonts, mascot skins) are self-hosted for GitHub Pages; nothing is
  fetched from a CDN.
