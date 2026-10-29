/**
 * Repair code blocks whose newlines were lost in the original CSDN export.
 *
 * The Hexo/db.json archive collapsed many fenced blocks onto a single line,
 * e.g. "```python import asyncio import aiohttp ```". Combining those back into
 * a fenced block keeps the rest of the article rendering, but the code itself
 * stays on one line. CSDN still serves the original articles, so fetch the
 * public page, extract its <pre> blocks, and restore the multi-line code by
 * matching the whitespace-normalised content.
 *
 * Usage:
 *   cd tools/csdn-migrate
 *   node repair-code.mjs            # repair in place
 *   node repair-code.mjs --dry      # report only
 *   node repair-code.mjs --limit 5  # try the first 5 posts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const POST_DIRS = ['content/zh/csdn', 'content/en/csdn'].map((p) => path.join(REPO, p));
const DRY = process.argv.includes('--dry');
const LIMIT = (() => {
  const i = process.argv.indexOf('--limit');
  return i > 0 ? Number(process.argv[i + 1]) || 0 : 0;
})();
const DELAY_MS = 4500;
const JITTER_MS = 2500;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const stats = { posts: 0, fetched: 0, failed: [], blocks: 0, repaired: 0, unmatched: 0, unchanged: 0 };

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0*39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (m, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, '&');
}

function normalize(code) {
  return decodeEntities(code).replace(/\s+/g, '');
}

function readPost(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;
  const urlMatch = match[1].match(/^csdn_url:\s*"([^"]+)"/m);
  if (!urlMatch) return null;
  return { raw, head: match[0], body: raw.slice(match[0].length), url: urlMatch[1], file };
}

const BLOCK_RE = /^```([^\n`]*)\n([\s\S]*?)^```[ \t]*$/gm;

function collapsedBlocks(body) {
  const out = [];
  BLOCK_RE.lastIndex = 0;
  let m;
  while ((m = BLOCK_RE.exec(body))) {
    const code = m[2];
    const nonEmpty = code.split('\n').filter((line) => line.trim());
    if (nonEmpty.length === 1 && code.trim().length > 40) {
      out.push({ start: m.index, end: m.index + m[0].length, lang: m[1].trim(), code: code.trim(), raw: m[0] });
    }
  }
  return out;
}

function extractPreBlocks(html) {
  const start = html.indexOf('id="content_views"');
  if (start < 0) return [];
  let end = html.indexOf('id="recommend', start);
  if (end < 0) end = html.length;
  const region = html.slice(start, end);
  const blocks = [];
  const re = /<pre\b([^>]*)>([\s\S]*?)<\/pre>/gi;
  let m;
  while ((m = re.exec(region))) {
    const attrs = m[1];
    const langMatch = attrs.match(/language-([a-z0-9+#-]+)/i)
      || m[2].match(/class="[^"]*language-([a-z0-9+#-]+)/i);
    const codeHtml = m[2];
    const text = decodeEntities(
      codeHtml
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/div>\s*<div[^>]*>/gi, '\n')
        .replace(/<[^>]+>/g, ''),
    ).replace(/\r\n/g, '\n').replace(/[ \t]+\n/g, '\n').replace(/^\n+|\n+$/g, '');
    if (!text.trim()) continue;
    blocks.push({ lang: (langMatch && langMatch[1]) || '', code: text });
  }
  return blocks;
}

async function fetchArticle(url) {
  const withParam = url.includes('?') ? url : `${url}?spm=1001.2014.3001.5501`;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const res = await fetch(withParam, {
        headers: {
          'User-Agent': UA,
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
          Referer: 'https://blog.csdn.net/',
        },
        redirect: 'follow',
      });
      const html = await res.text();
      if (!res.ok || /请进行安全验证|Security Verification/.test(html)) {
        throw new Error(`status ${res.status} (verification page)`);
      }
      return html;
    } catch (error) {
      if (attempt === 4) throw error;
      // CSDN rate-limits aggressively; back off longer on each retry.
      await new Promise((resolve) => setTimeout(resolve, 8000 * attempt));
    }
  }
  return '';
}

function repairBody(body, liveBlocks) {
  const index = new Map();
  for (const block of liveBlocks) {
    const key = normalize(block.code);
    if (!key) continue;
    if (!index.has(key)) index.set(key, block);
  }
  const candidates = collapsedBlocks(body);
  let repaired = 0;
  const missed = [];
  // Replace from the end so earlier offsets stay valid.
  for (const candidate of [...candidates].reverse()) {
    const block = index.get(normalize(candidate.code));
    if (!block || block.code.split('\n').length < 2) {
      stats.unmatched += 1;
      missed.push(candidate.code.slice(0, 60));
      continue;
    }
    const fence = '```' + (candidate.lang || block.lang || '');
    const replacement = `${fence}\n${block.code}\n\`\`\``;
    body = body.slice(0, candidate.start) + replacement + body.slice(candidate.end);
    repaired += 1;
    stats.repaired += 1;
  }
  return { body, repaired, missed };
}

async function main() {
  const files = [];
  for (const dir of POST_DIRS) {
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      const file = path.join(dir, name, 'index.md');
      if (fs.existsSync(file)) files.push(file);
    }
  }
  const targets = [];
  for (const file of files) {
    const post = readPost(file);
    if (!post) continue;
    const candidates = collapsedBlocks(post.body);
    if (candidates.length) targets.push({ post, count: candidates.length });
  }
  targets.sort((a, b) => b.count - a.count);
  const work = LIMIT ? targets.slice(0, LIMIT) : targets;
  console.log(`posts needing repair: ${targets.length}, processing ${work.length}`);

  for (const { post } of work) {
    stats.posts += 1;
    const label = path.relative(REPO, post.file);
    try {
      const html = await fetchArticle(post.url);
      stats.fetched += 1;
      const liveBlocks = extractPreBlocks(html);
      stats.blocks += liveBlocks.length;
      const result = repairBody(post.body, liveBlocks);
      if (result.repaired && !DRY) {
        fs.writeFileSync(post.file, post.head + result.body);
      }
      console.log(`${result.repaired ? 'FIX' : '---'} ${label} live=${liveBlocks.length} repaired=${result.repaired}${result.missed.length ? ' missed=' + result.missed.length : ''}`);
    } catch (error) {
      stats.failed.push({ file: label, url: post.url, error: String(error.message || error) });
      console.log(`ERR ${label} ${error.message || error}`);
    }
    await new Promise((resolve) => setTimeout(resolve, DELAY_MS + Math.random() * JITTER_MS));
  }

  console.log(JSON.stringify(stats, null, 2));
  fs.writeFileSync(path.join(HERE, 'repair-report.json'), JSON.stringify(stats, null, 2));
}

main();
