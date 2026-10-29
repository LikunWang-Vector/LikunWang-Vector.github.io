/**
 * Bilingual copy for the REALME shell.
 *
 * The content browser and travel atlas carry their own per-language strings,
 * but the fixed landing skeleton is translated by walking `[data-i18n]`
 * elements. The choice is stored in localStorage and mirrored on `#lang-switch`.
 */

export type Lang = 'en' | 'zh';

const STORAGE_KEY = 'realme:lang';

const EN = {
  navBlog: '01_blog',
  navArchive: '02_archive',
  navPapers: '03_papers',
  navProjects: '04_projects',
  navTravel: '05_travel',
  returnBlog: 'return to blog',
  backToGrid: '← back to the grid',
  systemOnline: 'system online',
  heroLede:
    'Algorithm engineer working at the seam between deep learning and silicon — TPU operators, toolchain optimisation, and the occasional topology-optimised fish.',
  enterGrid: 'enter the grid',
  formalSite: 'formal site ↗',
  location: 'Shenzhen · 22.54°N',
  latency: 'latency:',
  latencyUnit: 'ms',
  render: 'render: webgl',
  scroll: 'scroll',
  about: 'about',
  aboutP1:
    'I build and tune the low-level pieces that make neural networks fast: TPU operator kernels, compiler passes, and the toolchain around them.',
  aboutP2:
    "Before that, a master's at Waseda's Optimization Lab — predicting fish-vertebrae loading with topology optimization, FEA and deep learning — and a computer-science degree at UESTC.",
  aboutP3:
    'I write bilingual tutorials on Python, web scraping and CS fundamentals, archived on this same domain.',
  statArticles: 'bilingual articles',
  statProjects: 'selected projects',
  statWcms: 'WCSMO oral',
  statCoffee: 'coffee units',
  stack: 'stack',
  stackAi: 'AI systems',
  stackAi1: 'TPU operator development',
  stackAi2: 'ML compiler & toolchain',
  stackAi3: 'PyTorch · TensorFlow',
  stackAi4: 'CUDA / kernel profiling',
  stackResearch: 'Research',
  stackResearch1: 'Topology optimization',
  stackResearch2: 'Finite element analysis',
  stackResearch3: 'Computer vision · YOLO',
  stackResearch4: 'Scientific computing',
  stackEngineering: 'Engineering',
  stackEngineering1: 'C++ · Python · CUDA',
  stackEngineering2: 'Linux · Docker · Git',
  stackEngineering3: 'Selenium · Scrapy · BS4',
  stackEngineering4: 'Hugo · TypeScript · Three.js',
  work: 'selected work',
  workSystems: 'systems',
  workTpuTitle: 'TPU Operator Suite',
  workTpuDesc: 'Custom operators and toolchain fixes for production TPU workloads.',
  workResearch: 'research',
  workFishTitle: 'Fish Vertebrae Prediction',
  workFishDesc:
    'Loading-force prediction combining topology optimization, FEA and deep learning.',
  workVision: 'vision',
  workDriverTitle: 'Driver Emotion Recognition',
  workDriverDesc: 'Real-time facial-state detection for in-cabin safety research.',
  workPlay: 'play',
  workBulletTitle: 'Bullet Dungeon',
  workBulletDesc: 'A bullet-hell dungeon crawler built as an engine and gameplay experiment.',
  signal: 'signal log',
  timeNow: '2025 — now',
  jobTpu: 'TPU Operator Engineer',
  jobTpuPlace: 'Suanhai Technology · Shenzhen',
  timeWcms: '2025.05',
  jobWcms: 'WCSMO-16 · Oral Presentation',
  jobWcmsPlace: 'Kobe, Japan · structural & multidisciplinary optimization',
  timeWaseda: '2023 — 2025',
  jobWaseda: "M.Eng. · Waseda University",
  jobWasedaPlace: 'Optimization Lab · Professor Shintaro Yamasaki',
  timeUestc: '2020 — 2024',
  jobUestc: 'B.Eng. · UESTC',
  jobUestcPlace: 'Computer Science & Technology · UESTC–Waseda G-Course',
  contact: 'open channel',
  contactLede:
    'Research collaborations, systems work, or just a good problem — the channel is open.',
  contactMail: 'mail',
  contactGithub: 'github',
  contactLinkedin: 'linkedin',
  contactScholar: 'scholar',
  contactCsdn: 'csdn',
  footerFormal: 'formal site',
  bootHint: 'press any key to skip',
  quickBoot: 'reconnecting',
  languageLabel: 'Language',
  sectionsLabel: 'Sections',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  pageTitle: 'REALME // Likun Wang',
  pageDescription:
    'An alternative, neon-terminal take on Likun Wang — AI systems, TPU operators and optimization research.',
  mascotOn: 'mascot: on',
  mascotOff: 'mascot: off',
} as const;

type CopyKey = keyof typeof EN;

const ZH: Record<CopyKey, string> = {
  navBlog: '01_博客',
  navArchive: '02_归档',
  navPapers: '03_论文',
  navProjects: '04_项目',
  navTravel: '05_旅行',
  returnBlog: '返回博客',
  backToGrid: '← 返回主界面',
  systemOnline: '系统在线',
  heroLede:
    '算法工程师，工作在深度学习与芯片的交界处——TPU 算子、工具链优化，以及偶尔一条拓扑优化过的鱼。',
  enterGrid: '进入网格',
  formalSite: '正式主页 ↗',
  location: '深圳 · 22.54°N',
  latency: '延迟：',
  latencyUnit: 'ms',
  render: '渲染：WebGL',
  scroll: '滚动',
  about: '关于',
  aboutP1:
    '我负责构建并调优让神经网络跑得更快的底层组件：TPU 算子内核、编译器 pass，以及围绕它们的一整套工具链。',
  aboutP2:
    '在此之前，我在早稻田大学优化实验室取得工学硕士学位——用拓扑优化、有限元分析和深度学习预测鱼椎骨的受力——并在电子科技大学取得计算机科学学位。',
  aboutP3: '我在同一个域名上写双语教程，涵盖 Python、网页抓取和计算机基础。',
  statArticles: '双语文章',
  statProjects: '精选项目',
  statWcms: 'WCSMO 口头报告',
  statCoffee: '咖啡单位',
  stack: '技术栈',
  stackAi: 'AI 系统',
  stackAi1: 'TPU 算子开发',
  stackAi2: 'ML 编译器与工具链',
  stackAi3: 'PyTorch · TensorFlow',
  stackAi4: 'CUDA / 内核性能分析',
  stackResearch: '研究',
  stackResearch1: '拓扑优化',
  stackResearch2: '有限元分析',
  stackResearch3: '计算机视觉 · YOLO',
  stackResearch4: '科学计算',
  stackEngineering: '工程',
  stackEngineering1: 'C++ · Python · CUDA',
  stackEngineering2: 'Linux · Docker · Git',
  stackEngineering3: 'Selenium · Scrapy · BS4',
  stackEngineering4: 'Hugo · TypeScript · Three.js',
  work: '精选作品',
  workSystems: '系统',
  workTpuTitle: 'TPU 算子套件',
  workTpuDesc: '为生产环境 TPU 负载定制的算子与工具链修复。',
  workResearch: '研究',
  workFishTitle: '鱼椎骨受力预测',
  workFishDesc: '结合拓扑优化、有限元分析与深度学习的受力预测。',
  workVision: '视觉',
  workDriverTitle: '驾驶员情绪识别',
  workDriverDesc: '面向舱内安全研究的实时面部状态检测。',
  workPlay: '游戏',
  workBulletTitle: '弹幕地牢',
  workBulletDesc: '一个作为引擎与玩法实验而构建的弹幕地牢爬行游戏。',
  signal: '信号日志',
  timeNow: '2025 — 至今',
  jobTpu: 'TPU 算子工程师',
  jobTpuPlace: 'Suanhai Technology · 深圳',
  timeWcms: '2025.05',
  jobWcms: 'WCSMO-16 · 口头报告',
  jobWcmsPlace: '日本神户 · 结构与多学科优化',
  timeWaseda: '2023 — 2025',
  jobWaseda: '工学硕士 · 早稻田大学',
  jobWasedaPlace: '优化实验室 · 山崎慎太郎 教授',
  timeUestc: '2020 — 2024',
  jobUestc: '工学学士 · 电子科技大学',
  jobUestcPlace: '计算机科学与技术 · 电子科大—早稻田 G 课程',
  contact: '开放信道',
  contactLede: '研究合作、系统工程，或者只是一个好问题——信道始终开放。',
  contactMail: '邮箱',
  contactGithub: 'github',
  contactLinkedin: 'linkedin',
  contactScholar: '学术主页',
  contactCsdn: 'csdn',
  footerFormal: '正式主页',
  bootHint: '按任意键跳过',
  quickBoot: '正在重连',
  languageLabel: '语言',
  sectionsLabel: '栏目',
  menuOpen: '打开菜单',
  menuClose: '关闭菜单',
  pageTitle: 'REALME // 王立坤',
  pageDescription:
    '王立坤的霓虹终端个人主页——AI 系统、TPU 算子与优化研究。',
  mascotOn: '看板娘：开',
  mascotOff: '看板娘：关',
};

const COPY: Record<Lang, Record<CopyKey, string>> = { en: EN, zh: ZH };

const ROLES: Record<Lang, string[]> = {
  en: [
    'TPU Operator Engineer',
    'AI Systems & Hardware Acceleration',
    'Optimization Researcher',
    'Bilingual Technical Writer',
  ],
  zh: ['TPU 算子工程师', 'AI 系统与硬件加速', '优化算法研究者', '双语技术写作者'],
};

const listeners = new Set<(lang: Lang) => void>();

const safeGet = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSet = (key: string, value: string): void => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* private mode — the choice still works for this visit */
  }
};

function detectLang(): Lang {
  const saved = safeGet(STORAGE_KEY);
  if (saved === 'en' || saved === 'zh') return saved;
  return (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

let current: Lang = detectLang();

export const getLang = (): Lang => current;
export const isZh = (): boolean => current === 'zh';
export const roles = (): string[] => ROLES[current];

export function t(key: CopyKey): string {
  return COPY[current][key];
}

export function onLangChange(listener: (lang: Lang) => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function syncToggle(): void {
  const group = document.getElementById('lang-switch');
  if (!group) return;
  group.dataset.lang = current;
  group.setAttribute('aria-label', t('languageLabel'));
  group.querySelectorAll<HTMLButtonElement>('.lang-opt').forEach((option) => {
    const active = option.dataset.lang === current;
    option.classList.toggle('is-active', active);
    option.setAttribute('aria-pressed', String(active));
  });
}

export function applyStaticCopy(): void {
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n as CopyKey | undefined;
    if (key && key in COPY[current]) node.textContent = t(key);
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((node) => {
    const key = node.dataset.i18nAria as CopyKey | undefined;
    if (key && key in COPY[current]) node.setAttribute('aria-label', t(key));
  });

  document.documentElement.lang = current === 'zh' ? 'zh-Hans' : 'en';
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) description.content = t('pageDescription');
  syncToggle();
}

export function setLang(next: Lang): void {
  if (next === current) return;
  current = next;
  safeSet(STORAGE_KEY, next);
  applyStaticCopy();
  listeners.forEach((listener) => listener(next));
}

export function initI18n(): void {
  applyStaticCopy();
  const group = document.getElementById('lang-switch');
  if (!group) return;
  group.addEventListener('click', (event) => {
    // Each chip is a real button now: clicking a chip selects that language
    // rather than blindly toggling — clicking the already-active 中 must not
    // flip the page back to English.
    const option = (event.target as Element | null)?.closest<HTMLButtonElement>('.lang-opt');
    const chosen = option?.dataset.lang;
    if (chosen !== 'en' && chosen !== 'zh') return;
    setLang(chosen);
  });
}

export function toggleMascotLabel(visible: boolean): string {
  return visible ? t('mascotOn') : t('mascotOff');
}
