/**
 * Keep the old Hexo permalinks alive.
 *
 * The archive was previously published by Hexo at
 *   /YYYY/MM/DD/zh-CN/<filename>/   and   /YYYY/MM/DD/en/<filename>/
 * Hugo now serves the same articles at /zh/csdn/<slug>/ and /csdn/<slug>/.
 * This script reads the built Hexo output to enumerate the old URLs, matches
 * each page to its new slug via the CSDN article id, and writes a small
 * meta-refresh redirect at the old path.
 *
 * Usage:
 *   cd tools/csdn-migrate
 *   node legacy-redirects.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const SOURCE = process.env.CSDN_SOURCE || 'D:/Projects/hexo-blog';
const OLD_PUBLIC = path.join(SOURCE, 'public');
const OUT = path.join(REPO, 'static');

function newUrlById() {
  // Keyed by "<language>:<article id>" because a zh/en pair shares one CSDN id.
  const map = new Map();
  for (const [dir, lang] of [['content/en/csdn', 'en'], ['content/zh/csdn', 'zh']]) {
    const root = path.join(REPO, dir);
    if (!fs.existsSync(root)) continue;
    for (const name of fs.readdirSync(root)) {
      const file = path.join(root, name, 'index.md');
      if (!fs.existsSync(file)) continue;
      const raw = fs.readFileSync(file, 'utf8').slice(0, 1200);
      const m = raw.match(/csdn_url:\s*"([^"]+)"/);
      const id = m && (m[1].match(/details\/(\d+)/) || [])[1];
      if (id && !map.has(`${lang}:${id}`)) map.set(`${lang}:${id}`, `${lang === 'zh' ? '/zh' : ''}/csdn/${name}/`);
    }
  }
  return map;
}

function oldPages() {
  const pages = [];
  if (!fs.existsSync(OLD_PUBLIC)) return pages;
  for (const year of fs.readdirSync(OLD_PUBLIC)) {
    if (!/^\d{4}$/.test(year)) continue;
    const yearDir = path.join(OLD_PUBLIC, year);
    for (const month of fs.readdirSync(yearDir)) {
      const monthDir = path.join(yearDir, month);
      if (!fs.statSync(monthDir).isDirectory()) continue;
      for (const day of fs.readdirSync(monthDir)) {
        const dayDir = path.join(monthDir, day);
        if (!fs.statSync(dayDir).isDirectory()) continue;
        for (const lang of fs.readdirSync(dayDir)) {
          const langDir = path.join(dayDir, lang);
          if (!fs.statSync(langDir).isDirectory()) continue;
          for (const slug of fs.readdirSync(langDir)) {
            const file = path.join(langDir, slug, 'index.html');
            if (!fs.existsSync(file)) continue;
            pages.push({ url: `/${year}/${month}/${day}/${lang}/${slug}/`, file });
          }
        }
      }
    }
  }
  return pages;
}

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function newUrlsByTitle() {
  // Early posts have no CSDN id (or carry it only on the Chinese side), so
  // fall back to matching the old page title against the new front matter.
  const map = new Map();
  for (const [dir, lang] of [['content/en/csdn', 'en'], ['content/zh/csdn', 'zh']]) {
    const root = path.join(REPO, dir);
    if (!fs.existsSync(root)) continue;
    for (const name of fs.readdirSync(root)) {
      const file = path.join(root, name, 'index.md');
      if (!fs.existsSync(file)) continue;
      const raw = fs.readFileSync(file, 'utf8').slice(0, 1200);
      const m = raw.match(/^title:\s*(".*")\s*$/m);
      if (!m) continue;
      let title;
      try { title = JSON.parse(m[1]); } catch (e) { continue; }
      map.set(`${lang}:${String(title).trim()}`, `${lang === 'zh' ? '/zh' : ''}/csdn/${name}/`);
    }
  }
  return map;
}

function htmlEscape(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function redirectPage(target) {
  const href = htmlEscape(target);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${href}">
<meta http-equiv="refresh" content="0; url=${href}">
<meta name="robots" content="noindex">
</head>
<body>
<p>This article has moved to <a href="${href}">${href}</a>.</p>
</body>
</html>
`;
}

const byId = newUrlById();
const byTitle = newUrlsByTitle();
const pages = oldPages();
let written = 0;
const skipped = [];
const seen = new Set();

const newSlugs = new Set();
for (const dir of ['content/en/csdn']) {
  const root = path.join(REPO, dir);
  if (fs.existsSync(root)) for (const name of fs.readdirSync(root)) newSlugs.add(name);
}

for (const page of pages) {
  const html = fs.readFileSync(page.file, 'utf8');
  const idMatch = html.match(/blog\.csdn\.net\/[^"']*article\/details\/(\d+)/);
  const lang = page.url.includes('/zh-CN/') ? 'zh' : 'en';
  let target = idMatch && byId.get(`${lang}:${idMatch[1]}`);

  if (!target) {
    // Old English paths use the slugified English filename.
    const stem = page.url.split('/').filter(Boolean).slice(3).join('/');
    const slug = slugify(decodeURIComponent(stem));
    if (lang === 'en' && newSlugs.has(slug)) target = `/csdn/${slug}/`;
  }
  if (!target) {
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    const clean = title.replace(/\s*\|\s*Likun Wang.*$/, '').replace(/\s*-\s*CSDN博客\s*$/, '').trim();
    if (clean) target = byTitle.get(`${lang}:${clean}`);
  }
  if (!target) {
    skipped.push(page.url);
    continue;
  }
  if (seen.has(page.url)) continue;
  seen.add(page.url);
  const dest = path.join(OUT, decodeURIComponent(page.url), 'index.html');
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, redirectPage(target));
  written += 1;
}

console.log(JSON.stringify({ oldPages: pages.length, written, skipped: skipped.slice(0, 10), skippedCount: skipped.length }, null, 2));
