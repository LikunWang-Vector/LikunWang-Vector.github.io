/**
 * Content browser for REALME.
 *
 * The neon site shares the Markdown in `content/` with the academic site but
 * does not use Hugo's output. `scripts/build-content.mjs` renders the same
 * files into `public/content/` (an index plus one HTML fragment per article),
 * and this module browses those fragments inside the neon shell. One source of
 * truth, two independent renderers.
 */

import { getLang, onLangChange, t, type Lang } from './i18n';
import { setActiveNav } from './nav';

interface Item {
  lang: Lang;
  route: Route;
  slug: string;
  title: string;
  /** Canonical academic URL, e.g. /post/my-post/ */
  url: string;
  /** REALME-rendered body, e.g. /realme/content/en/blog/my-post.html */
  file: string;
  date: string;
  summary: string;
  tags: string[];
  readingTime: number;
}

type Route = 'blog' | 'archive' | 'papers' | 'projects' | 'travel';

const ROUTES: Record<
  Route,
  { index: string; label: Record<Lang, string>; blurb: Record<Lang, string> }
> = {
  blog: {
    index: '01',
    label: { en: 'blog', zh: '博客' },
    blurb: {
      en: 'Notes on research, engineering, and the space between.',
      zh: '关于研究、工程，以及两者之间那些空间的笔记。',
    },
  },
  archive: {
    index: '02',
    label: { en: 'csdn archive', zh: 'CSDN 归档' },
    blurb: {
      en: '151 bilingual tutorials migrated from CSDN, kept with their original links.',
      zh: '从 CSDN 迁入的 151 篇双语教程，保留原始链接。',
    },
  },
  papers: {
    index: '03',
    label: { en: 'publications', zh: '论文' },
    blurb: {
      en: 'Peer-reviewed papers and conference presentations.',
      zh: '同行评审论文与会议报告。',
    },
  },
  projects: {
    index: '04',
    label: { en: 'projects', zh: '项目' },
    blurb: {
      en: 'Systems, research and experiments.',
      zh: '系统、研究与实验。',
    },
  },
  travel: {
    index: '05',
    label: { en: 'travel', zh: '旅行' },
    blurb: {
      en: 'Nine nodes, three countries — an interactive atlas of where I have lived and worked.',
      zh: '九个节点、三个国家——一张可交互的生活与工作轨迹图。',
    },
  },
};

const routeMeta = (route: Route): { index: string; label: string; blurb: string } => {
  const entry = ROUTES[route];
  const lang = getLang();
  return { index: entry.index, label: entry.label[lang], blurb: entry.blurb[lang] };
};

const PAGE_SIZE = 24;
// Built by realme/scripts/build-content.mjs from ../content — REALME's own
// render of the shared Markdown, independent of Hugo's output.
const INDEX_URL = `${import.meta.env.BASE_URL}content/index.json`;

const L = (en: string, zh: string): string => (getLang() === 'zh' ? zh : en);

let items: Item[] = [];
let byUrl = new Map<string, Item>();
let indexState: Promise<void> | null = null;
let indexReady = false;

const listState: Record<Route, { query: string; tag: string; limit: number }> = {
  blog: { query: '', tag: '', limit: PAGE_SIZE },
  archive: { query: '', tag: '', limit: PAGE_SIZE },
  papers: { query: '', tag: '', limit: PAGE_SIZE },
  projects: { query: '', tag: '', limit: PAGE_SIZE },
  travel: { query: '', tag: '', limit: PAGE_SIZE },
};

let viewRoot: HTMLElement | null = null;
let viewBody: HTMLElement | null = null;
let viewCrumb: HTMLElement | null = null;
let landing: HTMLElement | null = null;
const articleCache = new Map<string, string>();

// The travel atlas is a MapLibre app of its own, loaded on demand so the map
// bundle never weighs on the first paint of the rest of the site.
type TravelView = { dispose: () => void };
let travelView: TravelView | null = null;
let travelModule: Promise<typeof import('./travel')> | null = null;

function disposeTravel(): void {
  travelView?.dispose();
  travelView = null;
}

/* ------------------------------------------------------------------ utils */

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  text?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

const normPath = (url: string): string => {
  const path = url.split('#')[0]?.split('?')[0] ?? url;
  return path.endsWith('/') ? path : `${path}/`;
};

const formatDate = (iso: string): string => {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  const zh = getLang() === 'zh';
  return new Intl.DateTimeFormat(zh ? 'zh-CN' : 'en-GB',
    zh
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { day: '2-digit', month: 'short', year: 'numeric' },
  ).format(date);
};

/* ------------------------------------------------------------------ index */

async function loadIndex(): Promise<void> {
  if (!indexState) {
    indexState = fetch(INDEX_URL, { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) throw new Error(`index ${response.status}`);
        return response.json() as Promise<Item[]>;
      })
      .then((data) => {
        items = data.sort((a, b) => (a.date < b.date ? 1 : -1));
        byUrl = new Map(items.map((item) => [normPath(item.url), item]));
        indexReady = true;
      })
      .catch((error: unknown) => {
        indexState = null;
        throw error;
      });
  }
  return indexState;
}

/* ----------------------------------------------------------------- router */

interface Target {
  route: Route | null;
  slug: string | null;
}

function parseHash(): Target {
  const raw = window.location.hash;
  if (!raw.startsWith('#/')) return { route: null, slug: null };
  const parts = raw.slice(2).split('/').filter(Boolean);
  const route = parts[0] as Route | undefined;
  if (!route || !(route in ROUTES)) return { route: null, slug: null };
  const slug = parts.slice(1).join('/');
  return { route, slug: slug || null };
}

const hashFor = (item: Item): string => `#/${item.route}/${item.slug}`;

/* ------------------------------------------------------------------- view */

function showView(): void {
  if (!viewRoot || !landing) return;
  landing.hidden = true;
  viewRoot.hidden = false;
  document.body.classList.add('is-view');
}

function showLanding(): void {
  if (!viewRoot || !landing) return;
  viewRoot.hidden = true;
  landing.hidden = false;
  document.body.classList.remove('is-view');
  document.title = t('pageTitle');
}

function setCrumb(text: string): void {
  if (viewCrumb) viewCrumb.textContent = text;
}

function setBody(node: HTMLElement): void {
  if (!viewBody) return;
  viewBody.replaceChildren(node);
}

function loading(label = L('loading', '加载中')): HTMLElement {
  const box = el('div', 'view-loading');
  box.append(el('span', 'view-loading-dot'), el('span', '', `${label}…`));
  return box;
}

function errorBox(message: string, item?: Item): HTMLElement {
  const box = el('div', 'view-error');
  box.append(el('p', '', message));
  if (item) {
    const link = el('a', 'btn btn-ghost', L('open on the formal site ↗', '打开正式页面 ↗'));
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener';
    box.append(link);
  }
  return box;
}

/* ------------------------------------------------------------------- list */

function routeItems(route: Route): Item[] {
  const lang = getLang();
  return items.filter((item) => item.route === route && item.lang === lang);
}

function visibleItems(route: Route): Item[] {
  const state = listState[route];
  const query = state.query.trim().toLowerCase();
  return routeItems(route).filter((item) => {
    if (state.tag && !item.tags.includes(state.tag)) return false;
    if (!query) return true;
    return (
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });
}

function renderList(route: Route): void {
  const meta = routeMeta(route);
  const state = listState[route];
  const all = routeItems(route);

  const root = el('div', 'view-list');

  const head = el('div', 'view-head');
  head.append(el('span', 'section-index', meta.index));
  head.append(el('h2', '', meta.label));
  head.append(el('span', 'section-rule'));
  root.append(head);
  root.append(el('p', 'view-lede', meta.blurb));

  // tag chips
  const counts = new Map<string, number>();
  all.forEach((item) => item.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)));
  const topTags = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12);

  const tools = el('div', 'view-tools');

  const search = el('input', 'view-search') as HTMLInputElement;
  search.type = 'search';
  search.value = state.query;
  search.setAttribute('aria-label', L(`Filter ${meta.label}`, `筛选${meta.label}`));
  tools.append(search);

  // The results area is repainted on its own, so typing never rebuilds the
  // input (and never steals focus from it).
  const results = el('div', 'view-results');
  results.setAttribute('aria-live', 'polite');

  const paint = (): void => {
    const matches = visibleItems(route);
    const shown = matches.slice(0, state.limit);
    search.placeholder = L(
      `filter ${matches.length} ${meta.label}…`,
      `筛选 ${meta.label} · ${matches.length} 条…`,
    );
    results.replaceChildren();

    if (!shown.length) {
      results.append(el('p', 'view-empty', L('nothing matches that filter.', '没有匹配的内容。')));
      return;
    }

    const grid = el('div', 'entry-grid');
    shown.forEach((item, index) => {
      const card = el('a', 'entry');
      card.href = hashFor(item);
      card.dataset.cursor = 'hover';

      const row = el('div', 'entry-row');
      row.append(el('span', 'entry-index', String(index + 1).padStart(3, '0')));
      row.append(el('span', 'entry-date', formatDate(item.date)));
      card.append(row);

      card.append(el('h3', 'entry-title', item.title));
      if (item.summary) card.append(el('p', 'entry-summary', item.summary));

      if (item.tags.length) {
        const tags = el('div', 'entry-tags');
        item.tags.slice(0, 4).forEach((tag) => tags.append(el('span', 'entry-tag', tag)));
        card.append(tags);
      }

      grid.append(card);
    });
    results.append(grid);

    if (matches.length > shown.length) {
      const more = el('button', 'btn btn-ghost load-more');
      more.type = 'button';
      more.textContent = L(
        `load more · ${matches.length - shown.length} left`,
        `加载更多 · 还剩 ${matches.length - shown.length} 条`,
      );
      more.addEventListener('click', () => {
        state.limit += PAGE_SIZE;
        paint();
        results.focus({ preventScroll: true });
      });
      results.append(more);
    }
  };

  search.addEventListener('input', () => {
    state.query = search.value;
    state.limit = PAGE_SIZE;
    paint();
  });

  if (topTags.length) {
    const chips = el('div', 'chips');
    const chipNodes: HTMLButtonElement[] = [];

    const addChip = (tag: string, label: string, count?: number): HTMLButtonElement => {
      const chip = el('button', 'chip');
      chip.type = 'button';
      chip.dataset.tag = tag;
      chip.append(document.createTextNode(label));
      if (count !== undefined) chip.append(el('span', 'chip-count', String(count)));
      chip.addEventListener('click', () => {
        state.tag = tag && state.tag !== tag ? tag : '';
        state.limit = PAGE_SIZE;
        refreshChips();
        paint();
        chip.focus({ preventScroll: true });
      });
      chips.append(chip);
      chipNodes.push(chip);
      return chip;
    };

    // `refreshChips` is assigned below but called only from click handlers,
    // which run after this block has finished.
    const refreshChips = (): void => {
      chipNodes.forEach((chip) => {
        chip.classList.toggle('is-active', (chip.dataset.tag ?? '') === state.tag);
      });
    };

    addChip('', L('all', '全部'));
    topTags.forEach(([tag, count]) => addChip(tag, tag, count));
    refreshChips();
    tools.append(chips);
  }

  root.append(tools);
  root.append(results);
  setBody(root);
  paint();
  results.tabIndex = -1;
  document.title = `${meta.label} // REALME`;
}

/* ---------------------------------------------------------------- article */

function rewriteLinks(container: HTMLElement, item: Item): void {
  const base = new URL(item.url, window.location.origin);

  container.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

    let url: URL;
    try {
      url = new URL(href, base);
    } catch {
      return;
    }

    if (url.origin !== window.location.origin) {
      anchor.target = '_blank';
      anchor.rel = 'noopener';
      return;
    }

    const hit = byUrl.get(normPath(url.pathname));
    if (hit) {
      anchor.href = hashFor(hit);
      return;
    }

    // Internal page that REALME does not mirror — send it to the formal site.
    anchor.href = url.pathname + url.search;
    anchor.target = '_blank';
    anchor.rel = 'noopener';
  });
}

function rewriteMedia(container: HTMLElement, item: Item): void {
  const base = new URL(item.url, window.location.origin);
  container.querySelectorAll<HTMLImageElement>('img[src]').forEach((img) => {
    const src = img.getAttribute('src');
    if (!src) return;
    try {
      img.src = new URL(src, base).href;
    } catch {
      /* keep the original */
    }
    img.loading = 'lazy';
    img.decoding = 'async';
  });
}

async function fetchArticle(item: Item): Promise<string> {
  const cached = articleCache.get(item.file);
  if (cached) return cached;

  const response = await fetch(item.file, { credentials: 'same-origin' });
  if (!response.ok) throw new Error(`article ${response.status}`);
  const html = await response.text();

  const wrapper = document.createElement('div');
  wrapper.className = 'article';
  wrapper.innerHTML = html;

  rewriteLinks(wrapper, item);
  rewriteMedia(wrapper, item);

  const markup = wrapper.innerHTML;
  articleCache.set(item.file, markup);
  return markup;
}

async function renderArticle(route: Route, slug: string): Promise<void> {
  const meta = routeMeta(route);
  setCrumb(`${meta.label} / ${slug}`);

  const lang = getLang();
  const item =
    items.find(
      (entry) => entry.route === route && entry.slug === slug && entry.lang === lang,
    ) ?? items.find((entry) => entry.route === route && entry.slug === slug);
  if (!item) {
    setBody(
      errorBox(
        L(`No entry named “${slug}” in ${meta.label}.`, `${meta.label}中没有名为“${slug}”的内容。`),
      ),
    );
    return;
  }

  setCrumb(`${meta.label} / ${formatDate(item.date)}`);
  setBody(loading(L('decrypting article', '正在解密文章')));

  try {
    const markup = await fetchArticle(item);

    const root = el('article', 'view-article');

    const head = el('header', 'article-head');
    const back = el('a', 'article-back', `← ${meta.label}`);
    back.href = `#/${route}`;
    back.dataset.cursor = 'hover';
    head.append(back);

    const row = el('div', 'article-row');
    row.append(el('span', 'article-date', formatDate(item.date)));
    row.append(
      el('span', 'article-reading', L(`${item.readingTime} min read`, `${item.readingTime} 分钟阅读`)),
    );
    if (item.tags.length) {
      const tags = el('span', 'article-tags');
      item.tags.forEach((tag) => tags.append(el('span', 'entry-tag', tag)));
      row.append(tags);
    }
    head.append(row);

    head.append(el('h1', 'article-title', item.title));
    root.append(head);

    const prose = el('div', 'prose');
    prose.innerHTML = markup;
    root.append(prose);

    const foot = el('div', 'article-foot');
    const original = el('a', 'btn btn-ghost', L('open the formal page ↗', '打开正式页面 ↗'));
    original.href = item.url;
    original.target = '_blank';
    original.rel = 'noopener';
    foot.append(original);
    root.append(foot);

    setBody(root);
    document.title = `${item.title} // REALME`;
  } catch {
    setBody(
      errorBox(
        L(
          'This article could not be loaded in the neon viewer. You can read it on the formal site instead.',
          '这篇文章暂时无法在霓虹阅读器中加载，可以前往正式站点阅读。',
        ),
        item,
      ),
    );
  }
}

/* ------------------------------------------------------------------ travel */

async function renderTravel(): Promise<void> {
  disposeTravel();
  document.title = `${routeMeta('travel').label} // REALME`;

  const host = el('div', 'view-travel');
  setBody(host);

  travelModule ??= import('./travel');
  try {
    const module = await travelModule;
    // A newer hash took over while the map bundle was loading.
    if (!host.isConnected) return;
    travelView = module.renderTravel(host);
  } catch {
    travelModule = null;
    if (!host.isConnected) return;
    const box = errorBox(L('The interactive map could not start in this browser.', '此浏览器无法启动交互地图。'));
    const link = el(
      'a',
      'btn btn-ghost',
      L('open the formal travel page ↗', '打开正式旅行页面 ↗'),
    );
    link.href = '/travel/';
    link.target = '_blank';
    link.rel = 'noopener';
    box.append(link);
    setBody(box);
  }
}

/* ------------------------------------------------------------------- main */

function render(): void {
  const target = parseHash();

  document.body.classList.toggle('is-travel', target.route === 'travel');
  setActiveNav(target.route);

  if (!target.route) {
    disposeTravel();
    showLanding();
    return;
  }

  showView();
  setCrumb(routeMeta(target.route).label);

  if (target.route === 'travel') {
    void renderTravel();
    options.scrollToTop();
    return;
  }

  disposeTravel();

  if (!indexReady) {
    setBody(loading(L('loading index', '正在加载目录')));
    void loadIndex()
      .catch(() => undefined)
      .finally(() => {
        if (indexReady) render();
      });
    return;
  }

  if (target.slug) {
    void renderArticle(target.route, target.slug);
  } else {
    renderList(target.route);
  }

  options.scrollToTop();
}

let options: { scrollToTop: () => void } = { scrollToTop: () => window.scrollTo(0, 0) };

export function initContent(opts: { scrollToTop: () => void }): void {
  options = opts;

  viewRoot = document.getElementById('view');
  viewBody = document.getElementById('view-body');
  viewCrumb = document.getElementById('view-crumb');
  landing = document.getElementById('top');

  window.addEventListener('hashchange', render);

  // Language changes can alter the whole browser: labels, dates, which set of
  // entries is listed, and the article that a hash resolves to. A search term
  // or tag chip from the other language would usually match nothing, so clear
  // the temporary filters rather than showing an inexplicably empty list.
  onLangChange(() => {
    Object.values(listState).forEach((state) => {
      state.query = '';
      state.tag = '';
      state.limit = PAGE_SIZE;
    });
    render();
  });

  // Delegate clicks on internal article links so they stay in the neon shell.
  document.addEventListener('click', (event) => {
    const anchor = (event.target as Element | null)?.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || !href.startsWith('#/')) return;
    event.preventDefault();
    if (window.location.hash === href) render();
    else window.location.hash = href;
  });

  render();
}

export async function prefetchIndex(): Promise<void> {
  await loadIndex().catch(() => undefined);
}
