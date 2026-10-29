/**
 * REALME's own Markdown pipeline.
 *
 * The academic site (Hugo) and the neon site (this Vite app) share one source
 * of truth: `content/<lang>/{post,csdn,publication,project}`. Hugo renders the
 * academic pages; this script renders the same Markdown into REALME's own
 * fragments and index, with its own parser and highlighter. Nothing is
 * duplicated, and neither site depends on the other's output.
 *
 * Output (realme/public/content/):
 *   index.json                 metadata for every entry, tagged en/zh
 *   <lang>/<route>/<slug>.html rendered article body
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import hljs from 'highlight.js';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(project, '..');
const contentRoot = path.join(repo, 'content');
const outRoot = path.join(project, 'public', 'content');

const LANGS = [
  { lang: 'en', dir: 'en', prefix: '' },
  { lang: 'zh', dir: 'zh', prefix: '/zh' },
];

const SECTIONS = [
  { dir: 'post', route: 'blog', urlPrefix: '/post' },
  { dir: 'csdn', route: 'archive', urlPrefix: '/csdn' },
  { dir: 'publication', route: 'papers', urlPrefix: '/publication' },
  { dir: 'project', route: 'projects', urlPrefix: '/project' },
];

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return `<pre class="hljs"><code class="language-${lang}">${hljs.highlight(code, { language: lang, ignoreIllegals: true }).value}</code></pre>`;
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(code)}</code></pre>`;
  },
}).use(anchor, { permalink: anchor.permalink.headerLink({ safariReaderFix: true }) });

/** Recursively collect page bundles (directories containing index.md). */
function collect(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collect(full, acc);
    else if (entry.name === 'index.md') acc.push(full);
  }
  return acc;
}

const plain = (value) =>
  String(value ?? '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_>#~|]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

function summaryOf(data, body) {
  if (data.summary) return plain(data.summary);
  if (data.description) return plain(data.description);
  const first = body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith('#') && !block.startsWith('![') && !block.startsWith('<'));
  return plain(first ?? '').slice(0, 220);
}

function readingTime(html) {
  const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function cleanData(data) {
  return Object.fromEntries(
    Object.entries(data).filter(([key]) => !['title', 'summary', 'description'].includes(key)),
  );
}

const entries = [];
fs.rmSync(outRoot, { recursive: true, force: true });

for (const language of LANGS) {
  for (const section of SECTIONS) {
    const files = collect(path.join(contentRoot, language.dir, section.dir));
    const dest = path.join(outRoot, language.lang, section.route);
    fs.mkdirSync(dest, { recursive: true });

    for (const file of files) {
      const slug = path.basename(path.dirname(file));
      const raw = fs.readFileSync(file, 'utf8');
      const { data, content } = matter(raw);
      if (data.draft === true) continue;

      const html = md.render(content);
      fs.writeFileSync(path.join(dest, `${slug}.html`), html);

      const date = data.date ? new Date(data.date) : new Date(fs.statSync(file).mtime);
      entries.push({
        lang: language.lang,
        route: section.route,
        slug,
        title: plain(data.title ?? slug),
        // Link to the academic page for the canonical URL.
        url: `${language.prefix}${section.urlPrefix}/${slug}/`,
        file: `/realme/content/${language.lang}/${section.route}/${slug}.html`,
        date: Number.isNaN(date.getTime()) ? '1970-01-01' : date.toISOString().slice(0, 10),
        summary: summaryOf(data, content),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        readingTime: readingTime(html),
        meta: cleanData(data),
      });
    }
  }
}

entries.sort((a, b) => (a.date < b.date ? 1 : -1));
fs.writeFileSync(path.join(outRoot, 'index.json'), JSON.stringify(entries));

// The travel atlas is data, not Markdown. It lives at the repo root because the
// Hugo shortcodes read it too (site.Data.travel); REALME serves the same file.
const travelSource = path.join(repo, 'data', 'travel.json');
if (fs.existsSync(travelSource)) {
  fs.copyFileSync(travelSource, path.join(outRoot, 'travel.json'));
}

const byRoute = entries.reduce((acc, entry) => {
  const key = `${entry.lang}:${entry.route}`;
  acc[key] = (acc[key] ?? 0) + 1;
  return acc;
}, {});
console.log(
  `[build-content] ${entries.length} entries ${JSON.stringify(byRoute)} -> realme/public/content/`,
);
