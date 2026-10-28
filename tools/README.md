# Tools

Reproducible generators for the site's static assets.

## Requirements

- Node.js 18+
- Google Chrome (for the CV and OG image PDFs/screenshots)
- `CHROME_PATH` can override the default Chrome location

## Cover art, hero background, icons

```bash
cd tools/art
npm install
node generate.mjs
```

Writes:

- `assets/media/covers/*.png` (1200×675 project/post/publication/talk covers)
- `assets/media/hero-bg.svg` and `hero-bg.png`
- `assets/media/icon.png` (site icon / favicon source)
- `tools/art/cover-*.svg`, `hero-bg.svg`, `icon.svg` (editable sources)

## Open Graph image

```bash
cd tools/art
node generate-og.mjs
```

Writes `assets/media/sharing.png` (1200×630), using the hero background and the avatar.

## Earth textures

```bash
cd tools/art
node fetch-textures.mjs
```

Downloads the public three-globe example textures (NASA imagery), resizes and converts them to WebP in `static/img/`.

## Bilingual CV PDFs

```bash
cd tools/resume
npm install
node build.mjs
```

Writes:

- `static/uploads/resume.pdf`
- `static/uploads/resume-zh.pdf`

Also writes intermediate HTML files (`resume-en.html`, `resume-zh.html`) which are git-ignored.

Edit the content in `build.mjs` (the `data` object) and the CSS/HTML template below it. The photo is `tools/resume/photo.jpg`; replace it with a square portrait if needed.

