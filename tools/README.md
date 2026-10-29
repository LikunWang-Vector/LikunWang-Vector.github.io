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

## CSDN archive

```bash
cd tools/csdn-migrate
npm install
node migrate.mjs            # regenerate content/{en,zh}/csdn from D:/Projects/hexo-blog
node repair-code.mjs        # restore code-block line breaks from the live CSDN pages
node legacy-redirects.mjs   # keep the old Hexo permalinks working
```

`migrate.mjs` reads `CSDN_SOURCE` (default `D:/Projects/hexo-blog`) and writes:

- `content/en/csdn/<slug>/index.md` and `content/zh/csdn/<slug>/index.md` (151 pairs)
- `static/images/posts/**` — referenced screenshots, copied byte-for-byte
- `assets/media/covers/csdn-*.png` — generated category covers
- `report.json` — pair/image diagnostics

It strips the manual tables of contents, repairs collapsed fenced code blocks, escapes raw
`<script>`/`<style>` mentions in prose, and adds a placeholder for missing screenshots.

The Hexo export lost the newlines inside many code blocks. `repair-code.mjs` fetches each
affected article from CSDN once, matches the blocks by whitespace-normalised content, and
writes the original multi-line code back. It writes `repair-report.json`; re-run it only when
`migrate.mjs` has regenerated the content.

`legacy-redirects.mjs` reads the old Hexo build in `hexo-blog/public/`, matches each page to
its new slug through the CSDN article id (falling back to the slug or title), and writes a
meta-refresh stub under `static/YYYY/MM/DD/<lang>/<name>/`, so the old permalinks keep working.

Images are deliberately not recompressed: the originals are screenshots where text legibility
matters. Unreferenced images are not copied at all.
