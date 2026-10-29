/**
 * Migrate the Hexo/CSDN archive at D:/Projects/hexo-blog into this Hugo site.
 *
 * Policy:
 * - All 151 zh/en pairs are migrated.
 * - Referenced post images are copied byte-for-byte (key screenshots are NOT
 *   compressed or resized).
 * - Unreferenced images are not copied (reported), so unused assets stay out.
 * - Category covers and the missing-image placeholder are generated/compressed.
 *
 * Usage:
 *   cd tools/csdn-migrate
 *   npm install
 *   node migrate.mjs
 *   # optional: CSDN_SOURCE=D:/path/to/hexo-blog node migrate.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import sharp from 'sharp';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const SOURCE = process.env.CSDN_SOURCE || 'D:/Projects/hexo-blog';
const POSTS = path.join(SOURCE, 'source/_posts');
const ZH_DIR = path.join(POSTS, 'zh-CN');
const EN_DIR = path.join(POSTS, 'en');
const SRC_IMAGES = path.join(SOURCE, 'source/images');
const OUT_EN = path.join(REPO, 'content/en/csdn');
const OUT_ZH = path.join(REPO, 'content/zh/csdn');
const COVERS = path.join(REPO, 'assets/media/covers');
const STATIC_IMAGES = path.join(REPO, 'static/images');
const PLACEHOLDER_URL = '/images/posts/missing-image.png';
const PLACEHOLDER_FILE = path.join(REPO, 'static', 'images', 'posts', 'missing-image.png');

const coverRules = [
  { slug: 'python-crawler', label: 'PYTHON · CRAWLER', accent: '#34d399', test: /爬虫|crawler|selenium|requests|正则|re模块|数据解析/i },
  { slug: 'html', label: 'HTML · WEB', accent: '#fb923c', test: /html/i },
  { slug: 'css', label: 'CSS · STYLING', accent: '#60a5fa', test: /css/i },
  { slug: 'frontend', label: 'FRONTEND · JS', accent: '#f472b6', test: /javascript|js|前端|vue|react|框架|jquery|ajax/i },
  { slug: 'notes', label: 'STUDY NOTES', accent: '#fbbf24', test: /复习|笔记|学习资料|习题/i },
  { slug: 'systems', label: 'SYSTEMS · CS', accent: '#a78bfa', test: /编译原理|操作系统|系统结构|计算机组成/i },
  { slug: 'software', label: 'SOFTWARE · ALGORITHMS', accent: '#22d3ee', test: /软件工程|算法|数据库|数据结构|测试/i },
  { slug: 'ai', label: 'AI · DATA', accent: '#2dd4bf', test: /人工智能|机器学习|深度学习|数据分析|python/i },
  { slug: 'tools', label: 'TOOLS · DEBUG', accent: '#94a3b8', test: /debug|工具|服务器|音视频|编辑器|环境/i },
];
const defaultCover = { slug: 'archive', label: 'CSDN ARCHIVE', accent: '#22d3ee' };

const report = {
  source: SOURCE,
  zhPosts: 0,
  enPosts: 0,
  pairs: 0,
  unmatchedZh: [],
  unmatchedEn: [],
  duplicateTitles: [],
  slugCollisions: [],
  generated: { en: 0, zh: 0 },
  covers: [],
  images: {
    references: 0,
    localCopied: 0,
    localBytes: 0,
    missing: [],
    remote: [],
    unreferencedCount: 0,
    unreferencedBytes: 0,
    byFormat: {},
  },
  warnings: [],
  fences: { fixed: 0 },
  scriptsStripped: 0,
  placeholders: [],
  oddFences: [],
};

function readPosts(dir) {
  return fs.readdirSync(dir)
    .filter((name) => name.toLowerCase().endsWith('.md'))
    .sort()
    .map((name) => {
      const file = path.join(dir, name);
      const raw = fs.readFileSync(file, 'utf8').replace(/^﻿/, '').replace(/\r\n/g, '\n');
      const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
      if (!match) throw new Error('Missing front matter: ' + file);
      const fm = yaml.load(match[1]) || {};
      return {
        file,
        name,
        fm,
        body: raw.slice(match[0].length),
      };
    });
}

function dateString(value) {
  if (!value) return '';
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const match = String(value).match(/\d{4}-\d{2}-\d{2}/);
  return match ? match[0] : '';
}

function listValue(value) {
  if (value === undefined || value === null || value === '') return [];
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  return [String(value).trim()].filter(Boolean);
}

function uniq(values) {
  return Array.from(new Set(values.map((v) => String(v).trim()).filter(Boolean)));
}

function slugify(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90);
}

function csdnId(...posts) {
  for (const post of posts) {
    const url = post && post.fm && post.fm.csdn_url;
    const match = String(url || '').match(/article\/details\/(\d+)/);
    if (match) return match[1];
  }
  return '';
}

function removeManualToc(body) {
  const lines = body.split('\n');
  const start = lines.findIndex((line) => /^\s*(?:\*\*|##+\s*)?(目录|Table of Contents)\s*(?:\*\*)?\s*$/i.test(line));
  if (start < 0) return body;
  let end = -1;
  // TOCs in the archive run up to ~150 lines before the horizontal rule that
  // ends them, so scan a wider window and also stop at the first real heading.
  for (let i = start + 1; i < Math.min(lines.length, start + 500); i += 1) {
    if (/^\s*(?:\*\s*){3}\s*$/.test(lines[i]) || /^\s*-{3,}\s*$/.test(lines[i]) || /^\s*_{3,}\s*$/.test(lines[i])) {
      end = i;
      break;
    }
    if (/^#{1,6}\s+\S/.test(lines[i])) {
      end = i - 1;
      break;
    }
  }
  if (end < 0) return body;
  lines.splice(start, end - start + 1);
  return lines.join('\n');
}

function outsideFences(body, fn) {
  const parts = body.split(/(```[\s\S]*?```)/g);
  for (let i = 0; i < parts.length; i += 2) parts[i] = fn(parts[i]);
  return parts.join('');
}

function outsideCode(body, fn) {
  // Like outsideFences, but also protects inline `code spans` and indented
  // (four-space/tab) code blocks, where tags are meant to be displayed
  // literally and must not be escaped again.
  const parts = body.split(/(```[\s\S]*?```|`[^`\n]*`)/g);
  for (let i = 0; i < parts.length; i += 2) {
    parts[i] = parts[i]
      .split('\n')
      .map((line) => (/^(?: {4}|\t)/.test(line) ? line : fn(line)))
      .join('\n');
  }
  return parts.join('');
}

function fixCollapsedFences(body) {
  // CSDN exports collapse many code blocks onto a single line, e.g.
  //   ```python print('hi')```
  // Goldmark reads those as unclosed fences and swallows later content.
  // Some lines also carry trailing text after the closing fence (a table
  // header got glued onto the same line), so keep that text after the block.
  let fixed = 0;
  const pattern = /^(```[A-Za-z0-9+#_.-]*)[ \t]+([^\n]*?)```[ \t]*([^\n]*)$/gm;
  let out = body;
  let previous;
  // A single line can hold several collapsed blocks (```a``` ```b```), and the
  // split moves the remainder onto its own line, so repeat until stable.
  do {
    previous = out;
    out = previous.replace(pattern, (m, open, code, rest) => {
      fixed += 1;
      const tail = rest.trim();
      return open + '\n' + code.trim() + '\n```' + (tail ? '\n\n' + tail : '');
    });
  } while (out !== previous && fixed < 5000);
  report.fences.fixed += fixed;
  return out;
}

function escapeDangerousTags(segment) {
  // Raw <script>/<style>/<iframe> etc. are usually tag names quoted in prose
  // (e.g. "the <script> element"). With Goldmark unsafe=true they would be
  // parsed as real elements and swallow the surrounding text, so escape them.
  return segment.replace(/<(\/?)(script|style|iframe|object|embed|link|meta|base|form|input|textarea|select)\b/gi, '&lt;$1$2');
}

function normalizeHr(segment) {
  // Ensure a blank line before horizontal rules so Goldmark does not turn
  // "text\n---" into a setext heading.
  const lines = segment.split('\n');
  const out = [];
  for (const line of lines) {
    if (/^-{3,}\s*$/.test(line) && out.length && out[out.length - 1].trim() !== '') {
      out.push('');
    }
    out.push(line);
  }
  return out.join('\n');
}

function stripExternalScripts(segment) {
  let changed = 0;
  const out = segment.replace(/<script\b[^>]*\bsrc\s*=\s*["'][^"']+["'][^>]*>([\s\S]*?<\/script\s*>)?/gi, () => {
    changed += 1;
    return '';
  });
  report.scriptsStripped += changed;
  return out;
}

const GIF_1x1 = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');

async function ensurePlaceholder(cleanRef) {
  if (/[{}]/.test(cleanRef)) return false;
  const ext = path.extname(cleanRef).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext)) return false;
  const relative = cleanRef.replace(/^\//, '');
  const dest = path.join(REPO, 'static', relative);
  const rel = path.relative(path.join(REPO, 'static'), dest);
  if (rel.startsWith('..') || path.isAbsolute(rel)) return false;
  if (fs.existsSync(dest)) return true;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const svg = `<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="675" fill="#0d1a21"/><rect x="1" y="1" width="1198" height="673" fill="none" stroke="#263a45"/><text x="600" y="320" text-anchor="middle" font-family="sans-serif" font-size="36" fill="#8aa0ac">Image unavailable</text><text x="600" y="370" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#5d7280">original file missing from CSDN archive</text></svg>`;
  if (ext === '.gif') fs.writeFileSync(dest, GIF_1x1);
  else if (ext === '.jpg' || ext === '.jpeg') await sharp(Buffer.from(svg)).jpeg({ quality: 80 }).toFile(dest);
  else if (ext === '.webp') await sharp(Buffer.from(svg)).webp({ quality: 80 }).toFile(dest);
  else await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile(dest);
  report.placeholders.push(cleanRef);
  return true;
}

function escapeRelativeImages(segment) {
  // A handful of tutorials show relative image paths as examples
  // (<img src="picture.jpg">). Rendered as real tags they are just broken
  // images, so show them as literal text instead.
  return segment.replace(/<img\b[^>]*\bsrc=["'](?!\/|https?:)[^"']*["'][^>]*>/gi, (tag) => `&lt;${tag.slice(1)}`);
}

function rewriteLegacyLinks(body, slugByStem) {
  // Some posts cross-link their counterpart with the old Hexo permalink
  // (/YYYY/MM/DD/<english-filename>/). Point those at the new /csdn/<slug>/.
  return body.replace(/\(\s*((?:https?:\/\/[^)\s]+)?\/\d{4}\/\d{2}\/\d{2}\/[^)\s]+)\s*\)/g, (match, rawUrl) => {
    const pathPart = rawUrl.replace(/^https?:\/\/[^/]+/, '');
    const rawStem = pathPart.split('/').filter(Boolean).slice(3).join('/');
    let stem = rawStem;
    try { stem = decodeURIComponent(rawStem); } catch (e) { /* keep raw */ }
    const key = slugify(stem);
    const slug = slugByStem.get(key) || slugByStem.get(key.replace(/^\d+-/, ''));
    if (!slug) return match;
    return `(/csdn/${slug}/)`;
  });
}

function normalizeLinkTitles(segment) {
  // Link titles such as ("<base>") survive entity decoding from CSDN, and get
  // escaped a second time in the title attribute, so the tooltip showed
  // "&lt;base&gt;". Decode them here; Hugo re-escapes the attribute correctly.
  return segment.replace(/(\]\([^)\s]*\s+")([^"\n]*)("\))/g, (match, open, title, close) => {
    const decoded = title.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    return decoded === title ? match : open + decoded + close;
  });
}

function cleanBody(body) {
  let output = removeManualToc(body);
  output = output.replace(/<!--\s*more\s*-->/gi, '');
  output = output.replace(/\{%[\s\S]*?%\}/g, '');
  output = fixCollapsedFences(output);
  output = outsideFences(output, normalizeHr);
  output = outsideFences(output, stripExternalScripts);
  output = outsideCode(output, normalizeLinkTitles);
  output = outsideCode(output, escapeDangerousTags);
  output = outsideCode(output, escapeRelativeImages);
  output = output.replace(/\n{4,}/g, '\n\n\n');
  return output.trim();
}

function decodeEntities(value) {
  return String(value)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');
}

function plainText(value) {
  // Decode first, then drop whole tags and partial tag starts ("<script"),
  // so summaries never carry "&lt;" into YAML (it double-escapes in meta tags).
  return decodeEntities(value)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/<\/?([A-Za-z][\w-]*)/g, '$1')
    .replace(/[`*_>#~|]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractSummary(body) {
  const blocks = body.split(/\n\s*\n/);
  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    if (/^(?:>|#|!\[|<|\||```|\* \* \*|---)/.test(trimmed)) continue;
    if (/^(?:[-*+]|\d+\.)\s/.test(trimmed)) continue;
    const text = plainText(trimmed);
    if (text.length >= 30) return text.slice(0, 180).trim();
  }
  return '';
}

function imageRefs(body) {
  // Ignore fenced/inline code so template strings like /images/skin/{ename}
  // are not treated as image references.
  const scan = body.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  const refs = new Set();
  for (const match of scan.matchAll(/!\[[^\]]*\]\(\s*([^)\s]+)(?:\s+"[^"]*")?\s*\)/g)) {
    refs.add(match[1].trim());
  }
  for (const match of scan.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) refs.add(match[1].trim());
  return Array.from(refs);
}

function safeDecode(value) {
  try { return decodeURIComponent(value); } catch (e) { return value; }
}

function resolveImageRef(ref) {
  const clean = ref.split('#')[0].split('?')[0].trim();
  if (!clean) return null;
  if (/^https?:\/\//i.test(clean)) return { remote: clean };
  let relative = clean;
  if (relative.startsWith('/')) relative = relative.slice(1);
  relative = relative.replace(/^(\.\.\/|\.\/)+/, '');
  if (!relative.startsWith('images/')) return null;
  const decoded = safeDecode(relative);
  const source = path.join(SOURCE, 'source', decoded);
  const sourceEncoded = path.join(SOURCE, 'source', relative);
  if (fs.existsSync(source) && fs.statSync(source).isFile()) return { source, relative: decoded };
  if (fs.existsSync(sourceEncoded) && fs.statSync(sourceEncoded).isFile()) return { source: sourceEncoded, relative };
  return { missing: clean };
}

function chooseCover(...posts) {
  const text = posts.map((post) => [
    ...listValue(post.fm.categories),
    ...listValue(post.fm.tags),
    String(post.fm.title || ''),
  ].join(' ')).join(' ');
  return coverRules.find((rule) => rule.test.test(text)) || defaultCover;
}

function coverSvg(rule) {
  const { label, accent, slug } = rule;
  const mark = slug === 'python-crawler' ? '&lt;/&gt;' : slug === 'html' ? '&lt;html&gt;' : slug === 'css' ? '{ }' : slug === 'notes' ? '✎' : slug === 'systems' ? '01' : slug === 'software' ? '⚙' : slug === 'ai' ? 'AI' : slug === 'tools' ? '>_' : 'CSDN';
  return `<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#050d14"/><stop offset="1" stop-color="#0b2530"/>
  </linearGradient>
  <radialGradient id="glow" cx="0.78" cy="0.32" r="0.62">
    <stop offset="0" stop-color="${accent}" stop-opacity="0.28"/>
    <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
  </radialGradient>
  <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
    <path d="M42 0H0V42" fill="none" stroke="#ffffff" stroke-opacity="0.05"/>
  </pattern>
</defs>
<rect width="1200" height="675" fill="url(#bg)"/>
<rect width="1200" height="675" fill="url(#glow)"/>
<rect width="1200" height="675" fill="url(#grid)"/>
<g fill="none" stroke="${accent}" stroke-opacity="0.16" stroke-width="1">
  <path d="M-40 210 C 220 140, 430 280, 660 200 S 1040 300, 1260 190"/>
  <path d="M-40 310 C 220 240, 430 380, 660 300 S 1040 400, 1260 290"/>
  <path d="M-40 410 C 220 340, 430 480, 660 400 S 1040 500, 1260 390"/>
  <path d="M-40 510 C 220 440, 430 580, 660 500 S 1040 600, 1260 490"/>
</g>
<text x="72" y="78" font-family="Inter, 'Segoe UI', system-ui, sans-serif" font-size="15" font-weight="700" letter-spacing="3.2" fill="${accent}">CSDN ARCHIVE</text>
<text x="72" y="330" font-family="'SFMono-Regular', Consolas, monospace" font-size="210" font-weight="800" fill="#ffffff" fill-opacity="0.94">${mark}</text>
<text x="76" y="430" font-family="Inter, 'Segoe UI', system-ui, sans-serif" font-size="26" font-weight="700" letter-spacing="4" fill="#d8eef3">${label}</text>
<rect x="76" y="466" width="64" height="3" rx="1.5" fill="${accent}"/>
<text x="76" y="610" font-family="Inter, 'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="500" letter-spacing="3" fill="#ffffff" fill-opacity="0.32">LIKUN WANG</text>
<text x="1124" y="610" text-anchor="end" font-family="'SFMono-Regular', Consolas, monospace" font-size="12" letter-spacing="2" fill="#ffffff" fill-opacity="0.22">${slug.toUpperCase()}</text>
</svg>`;
}

async function makeCovers() {
  fs.mkdirSync(COVERS, { recursive: true });
  for (const rule of [...coverRules, defaultCover]) {
    const file = path.join(COVERS, `csdn-${rule.slug}.png`);
    await sharp(Buffer.from(coverSvg(rule))).png({ compressionLevel: 9, palette: true }).toFile(file);
    report.covers.push(`covers/${path.basename(file)}`);
  }
}

async function makePlaceholder() {
  fs.mkdirSync(path.dirname(PLACEHOLDER_FILE), { recursive: true });
  const svg = `<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="675" fill="#0d1a21"/>
  <rect x="1" y="1" width="1198" height="673" fill="none" stroke="#263a45"/>
  <text x="600" y="310" text-anchor="middle" font-family="Inter, 'Segoe UI', sans-serif" font-size="40" font-weight="700" fill="#8aa0ac">Image unavailable</text>
  <text x="600" y="360" text-anchor="middle" font-family="Inter, 'Segoe UI', sans-serif" font-size="20" fill="#5d7280">The original screenshot was not found in the CSDN archive</text>
  </svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile(PLACEHOLDER_FILE);
}

function fileBytes(file) {
  try { return fs.statSync(file).size; } catch (e) { return 0; }
}

function walkFiles(dir, output = []) {
  if (!fs.existsSync(dir)) return output;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(file, output);
    else output.push(file);
  }
  return output;
}

function yamlString(value) {
  return JSON.stringify(String(value));
}

function writePost(lang, slug, title, date, lastmod, summary, tags, categories, cover, csdnUrl, stats, body) {
  const dir = path.join(lang === 'en' ? OUT_EN : OUT_ZH, slug);
  fs.mkdirSync(dir, { recursive: true });
  const lines = [
    '---',
    'type: post',
    'csdn: true',
    `title: ${yamlString(title)}`,
    `date: ${yamlString(date)}`,
    `lastmod: ${yamlString(lastmod)}`,
    'authors:',
    '  - admin',
    'tags:',
    ...tags.map((tag) => `  - ${yamlString(tag)}`),
    'categories:',
    ...categories.map((category) => `  - ${yamlString(category)}`),
    `summary: ${yamlString(summary)}`,
    'image:',
    `  filename: ${yamlString(cover)}`,
    `  caption: ${yamlString('CSDN Archive · ' + (coverRules.find((rule) => cover.endsWith(rule.slug + '.png')) || defaultCover).label)}`,
  ];
  if (csdnUrl) lines.push(`csdn_url: ${yamlString(csdnUrl)}`);
  for (const key of ['csdn_views', 'csdn_likes', 'csdn_comments', 'csdn_favorites']) {
    if (stats[key] !== undefined && stats[key] !== null && stats[key] !== '') lines.push(`${key}: ${Number(stats[key]) || 0}`);
  }
  lines.push('---', '', body, '');
  fs.writeFileSync(path.join(dir, 'index.md'), lines.join('\n'));
  report.generated[lang] += 1;
}

function writeArchivePages() {
  fs.mkdirSync(OUT_EN, { recursive: true });
  fs.mkdirSync(OUT_ZH, { recursive: true });
  const en = `---\ntitle: CSDN Archive\nsummary: 151 bilingual tutorials migrated from my CSDN blog.\nview: article-grid\ncascade:\n  type: post\n---\n\nAn archive of **151 bilingual articles** migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666). The posts cover Python, web development, computer-science coursework, and debugging notes. The originals remain on CSDN; each article keeps its original link and reading statistics.\n\nPersonal notes and research write-ups live in the [regular blog](/post/).\n`;
  const zh = `---\ntitle: CSDN 博客归档\nsummary: 从 CSDN 迁移的 151 对中英双语文章。\nview: article-grid\ncascade:\n  type: post\n---\n\n这里归档了从我的 [CSDN 博客](https://blog.csdn.net/m0_59180666) 迁移过来的 **151 对中英双语文章**，内容涵盖 Python、前端开发、计算机专业课程复习和 Debug 笔记。每篇文章保留 CSDN 原文链接和阅读数据。\n\n个人随笔与研究文章仍在[博客](/zh/post/)中。\n`;
  fs.writeFileSync(path.join(OUT_EN, '_index.md'), en);
  fs.writeFileSync(path.join(OUT_ZH, '_index.md'), zh);
}

async function main() {
  if (!fs.existsSync(ZH_DIR) || !fs.existsSync(EN_DIR)) {
    throw new Error('CSDN source not found: ' + SOURCE);
  }

  const zhPosts = readPosts(ZH_DIR);
  const enPosts = readPosts(EN_DIR);
  report.zhPosts = zhPosts.length;
  report.enPosts = enPosts.length;

  function normalizeKey(value) {
    return String(value || '')
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, '');
  }

  function postKeys(post) {
    const stem = path.basename(post.file, '.md');
    const title = String(post.fm.title || '');
    return uniq([title, normalizeKey(title), slugify(title), stem, normalizeKey(stem), slugify(stem)].filter(Boolean));
  }

  function counterpartRefs(post) {
    const pair = post.fm.lang_pair;
    if (typeof pair === 'string') return uniq([pair]);
    if (pair && typeof pair === 'object') {
      return uniq(Object.values(pair).filter((value) => typeof value === 'string'));
    }
    return [];
  }

  function buildIndex(posts) {
    const index = new Map();
    for (const post of posts) {
      for (const key of postKeys(post)) {
        if (!index.has(key)) index.set(key, post);
      }
    }
    return index;
  }

  function findCounterpart(refs, index) {
    for (const ref of refs) {
      const keys = [String(ref).trim(), normalizeKey(ref), slugify(ref)].filter(Boolean);
      for (const key of keys) {
        if (index.has(key)) return index.get(key);
      }
    }
    return null;
  }

  const enIndex = buildIndex(enPosts, 'en');
  const zhIndex = buildIndex(zhPosts, 'zh');
  const enById = new Map();
  const zhById = new Map();
  for (const post of enPosts) {
    const id = csdnId(post);
    if (!id) continue;
    if (enById.has(id)) report.duplicateTitles.push('en csdn id: ' + id);
    else enById.set(id, post);
  }
  for (const post of zhPosts) {
    const id = csdnId(post);
    if (!id) continue;
    if (zhById.has(id)) report.duplicateTitles.push('zh csdn id: ' + id);
    else zhById.set(id, post);
  }
  const pairs = [];
  const usedZh = new Set();
  const usedEn = new Set();

  for (const zh of zhPosts) {
    const id = csdnId(zh);
    const en = (id && enById.get(id)) || findCounterpart(counterpartRefs(zh), enIndex);
    if (!en || usedEn.has(en.file)) {
      report.unmatchedZh.push(String(zh.fm.title || zh.name));
      continue;
    }
    usedZh.add(zh.file);
    usedEn.add(en.file);
    pairs.push({ zh, en });
  }

  for (const en of enPosts) {
    if (usedEn.has(en.file)) continue;
    const id = csdnId(en);
    const zh = (id && zhById.get(id)) || findCounterpart(counterpartRefs(en), zhIndex);
    if (zh && !usedZh.has(zh.file)) {
      usedZh.add(zh.file);
      usedEn.add(en.file);
      pairs.push({ zh, en });
    } else {
      report.unmatchedEn.push({ title: String(en.fm.title || en.name), zhTitle: String(zh && zh.fm.title || '') });
    }
  }
  for (const zh of zhPosts) {
    if (!usedZh.has(zh.file) && !report.unmatchedZh.includes(String(zh.fm.title || zh.name))) {
      report.unmatchedZh.push(String(zh.fm.title || zh.name));
    }
  }

  fs.rmSync(OUT_EN, { recursive: true, force: true });
  fs.rmSync(OUT_ZH, { recursive: true, force: true });
  fs.mkdirSync(OUT_EN, { recursive: true });
  fs.mkdirSync(OUT_ZH, { recursive: true });
  fs.mkdirSync(STATIC_IMAGES, { recursive: true });

  await makeCovers();
  await makePlaceholder();
  writeArchivePages();

  const usedSlugs = new Set();
  const copiedSources = new Set();
  const unreferenced = new Set();
  const missingRefs = new Set();
  const remoteRefs = new Set();
  const formats = {};

  // Assign every slug up front so cross-post links can be rewritten to the new
  // Hugo URLs while the bodies are being cleaned.
  const assignments = [];
  for (const pair of pairs) {
    const id = csdnId(pair.zh, pair.en);
    let base = path.basename(pair.en.file, '.md').replace(/^\s*\d+\s*[-._、]\s*/, '');
    base = slugify(base) || (id ? `csdn-${id}` : 'csdn-post');
    let slug = base;
    if (usedSlugs.has(slug)) {
      slug = id ? `${base}-${id}` : `${base}-${usedSlugs.size + 1}`;
      report.slugCollisions.push(`${base} -> ${slug}`);
    }
    usedSlugs.add(slug);
    assignments.push({ ...pair, id, slug });
  }
  const slugByStem = new Map();
  for (const { en, slug } of assignments) {
    const stem = slugify(path.basename(en.file, '.md'));
    slugByStem.set(stem, slug);
    slugByStem.set(stem.replace(/^\d+-/, ''), slug);
  }

  for (const { zh, en, id, slug } of assignments) {

    const coverRule = chooseCover(zh, en);
    const cover = `covers/csdn-${coverRule.slug}.png`;
    const zhBody = rewriteLegacyLinks(cleanBody(zh.body), slugByStem);
    const enBody = rewriteLegacyLinks(cleanBody(en.body), slugByStem);

    const zhTags = uniq([...listValue(zh.fm.tags), 'CSDN']);
    const enTags = uniq([...listValue(en.fm.tags), 'CSDN']);
    const zhCategories = uniq(listValue(zh.fm.categories));
    const enCategories = uniq(listValue(en.fm.categories));
    const dateValue = dateString(zh.fm.date || en.fm.date) || '2022-01-01';
    const lastmodValue = dateString(zh.fm.updated || en.fm.updated) || dateValue;
    const date = dateValue;
    const lastmod = lastmodValue;
    if (!date) report.warnings.push('Missing date: ' + zh.file);

    const zhSummary = extractSummary(zhBody) || String(zh.fm.title || '');
    const enSummary = extractSummary(enBody) || String(en.fm.title || '');
    const csdnUrl = String(zh.fm.csdn_url || en.fm.csdn_url || '');
    const stats = {
      csdn_views: zh.fm.csdn_views ?? en.fm.csdn_views,
      csdn_likes: zh.fm.csdn_likes ?? en.fm.csdn_likes,
      csdn_comments: zh.fm.csdn_comments ?? en.fm.csdn_comments,
      csdn_favorites: zh.fm.csdn_favorites ?? en.fm.csdn_favorites,
    };

    const bodies = { zh: zhBody, en: enBody };
    // Chinese exports already start with a "migrated from CSDN" quote block;
    // the English exports do not, so add the original link and stats there.
    if (csdnUrl && !/migrated from/i.test(bodies.en.slice(0, 400))) {
      const bits = [];
      if (stats.csdn_views !== undefined && stats.csdn_views !== null) bits.push(`📊 ${Number(stats.csdn_views) || 0} views`);
      if (stats.csdn_likes !== undefined && stats.csdn_likes !== null) bits.push(`👍 ${Number(stats.csdn_likes) || 0} likes`);
      if (stats.csdn_comments !== undefined && stats.csdn_comments !== null) bits.push(`💬 ${Number(stats.csdn_comments) || 0} comments`);
      if (stats.csdn_favorites !== undefined && stats.csdn_favorites !== null) bits.push(`⭐ ${Number(stats.csdn_favorites) || 0} favorites`);
      const title = String(en.fm.title || '').replace(/[[\]]/g, '');
      const banner = [
        '> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).',
        `> Original: [${title}](${csdnUrl})`,
        bits.length ? `> ${bits.join(' | ')}` : '',
      ].filter(Boolean).join('\n');
      bodies.en = banner + '\n\n' + bodies.en;
    }

    for (const lang of ['zh', 'en']) {
      const refs = imageRefs(bodies[lang]);
      for (const ref of refs) {
        report.images.references += 1;
        const resolved = resolveImageRef(ref);
        if (!resolved) continue;
        if (resolved.remote) {
          remoteRefs.add(resolved.remote);
          continue;
        }
        if (resolved.missing) {
          missingRefs.add(resolved.missing);
          await ensurePlaceholder(resolved.missing);
          continue;
        }
        if (!copiedSources.has(resolved.source)) {
          copiedSources.add(resolved.source);
          const dest = path.join(REPO, 'static', resolved.relative);
          const relativeToStatic = path.relative(path.join(REPO, 'static'), dest);
          if (relativeToStatic.startsWith('..') || path.isAbsolute(relativeToStatic)) {
            report.warnings.push('Unsafe image path: ' + resolved.relative);
            continue;
          }
          const sourceSize = fileBytes(resolved.source);
          if (!fs.existsSync(dest) || fs.statSync(dest).size !== sourceSize) {
            fs.mkdirSync(path.dirname(dest), { recursive: true });
            fs.copyFileSync(resolved.source, dest);
          }
          report.images.localCopied += 1;
          report.images.localBytes += sourceSize;
          const ext = path.extname(resolved.source).toLowerCase() || '(none)';
          formats[ext] = (formats[ext] || 0) + 1;
        }
      }
    }

    writePost('zh', slug, String(zh.fm.title || ''), date, lastmod, zhSummary, zhTags, zhCategories, cover, csdnUrl, stats, bodies.zh);
    writePost('en', slug, String(en.fm.title || ''), date, lastmod, enSummary, enTags, enCategories, cover, csdnUrl, stats, bodies.en);
    report.pairs += 1;
  }

  const allImages = walkFiles(SRC_IMAGES);
  let unreferencedCount = 0;
  let unreferencedBytes = 0;
  for (const file of allImages) {
    if (!copiedSources.has(file)) {
      unreferencedCount += 1;
      unreferencedBytes += fileBytes(file);
    }
  }
  report.images.unreferencedCount = unreferencedCount;
  report.images.unreferencedBytes = unreferencedBytes;
  report.images.missing = Array.from(missingRefs);
  report.images.remote = Array.from(remoteRefs);
  report.images.byFormat = formats;
  report.images.referencedBytes = report.images.localBytes;

  fs.writeFileSync(path.join(HERE, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({
    pairs: report.pairs,
    generated: report.generated,
    unmatchedZh: report.unmatchedZh.length,
    unmatchedEn: report.unmatchedEn.length,
    imagesCopied: report.images.localCopied,
    imageMB: (report.images.localBytes / 1024 / 1024).toFixed(1),
    missing: report.images.missing.length,
    remote: report.images.remote.length,
    unreferencedCount,
    unreferencedMB: (unreferencedBytes / 1024 / 1024).toFixed(1),
    covers: report.covers.length,
  }, null, 2));
  if (report.unmatchedZh.length || report.unmatchedEn.length || report.duplicateTitles.length) {
    console.error('See report.json for unmatched/duplicate items.');
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
