/**
 * Mascot (“看板娘”).
 *
 * The character is the community DeepSeek whale girl (鲸鱼娘), not an original
 * drawing. Two accepted forms are kept:
 *
 *   maid   the fused DeepSeek × whale-girl maid design by ZipZipPipe, with
 *          three presentation modes: 标准 (中肥鱼 by Mao绒绒家园), 成年
 *          (成年肥鱼 by 玹乐喵) and Q版 (the c_0120 rig by 氵六青). She has no
 *          personal name and addresses the visitor as 主人.
 *   chibi  the Q-version of the same maid design, called 大肥鱼. It defaults to
 *          the jinglan 8×11 sprite sheet (the cuter Q look) and can be switched
 *          to the independent Live2D by 狐宫静 from the wardrobe.
 *
 * The original whale-girl OC was created by 上善无形 on Bilibili.
 *
 * Both actors are loaded on demand: the static WebP poster paints first, then
 * the animated rig fades in. If WebGL or a vendor script fails, the poster
 * stays — the wardrobe and the dialogue keep working.
 *
 * The gallery only publishes green/red sheets for the short-maid body, so the
 * green/red colourways are palette variants: blue hues rotate, the dark navy
 * outfit is deepened, and skin, line art and props stay untouched.
 *
 * License: CC BY-NC-SA 4.0 — attribution required, no commercial use,
 *          derivatives shared alike.
 */
import { onLangChange, toggleMascotLabel } from './i18n';
import type { MascotAction, MascotActor, MascotColour, MascotForm } from './mascot-types';

const ASSET = (name: string): string => `${import.meta.env.BASE_URL}mascot/${name}`;

type Form = MascotForm;
type Colour = MascotColour;
type MaidMode = 'standard' | 'adult' | 'q';
type QMode = 'sprite' | 'live2d';

interface Persona {
  label: string;
  mood: string;
  greeting: string;
  lines: string[];
  outfits: Record<Colour, string>;
}

const MAID_LINES: Record<MaidMode, string[]> = {
  standard: [
    '主人，我我我——我来帮忙！',
    '主人，刚学会摸鱼，请多指教。',
    '这个 bug 我好像见过……大概，主人。',
    '主人，今天也要元气满满地跑实验！',
    '主人，短裙跑起来很方便，不会踩到。',
    '诶，主人刚才那个命令是什么意思？',
    '主人，我会加油的，虽然可能会帮倒忙。',
    '主人，咖啡还是茶？我都可以。',
    '主人，我报到！',
    '主人，别担心，失败也是数据。',
  ],
  adult: [
    '主人，今天也辛苦了。要喝杯茶吗？',
    '主人，这个 bug 交给我……先把日志看完。',
    '主人，裙摆很长，但不会绊倒的。',
    '实验可以慢慢来，主人别熬夜。',
    '主人，我看起来更成熟了？……谢谢。',
    '主人，今天的进展我记下来了。',
    '失败也是数据，主人知道的。',
    '主人，要一起把这段代码看完吗？',
    '主人，偶尔也可以依靠我。',
    '主人，茶点准备好了，先休息一下吧。',
  ],
  q: [
    '主人，我我我——我来帮忙！',
    '主人，今天也要摸鱼……啊不是，加油！',
    '这个 bug 我好像见过……大概，主人。',
    '主人，白饭时间到了吗？',
    '主人，短裙比较方便，跑起来不会踩到！',
    '诶，主人刚才那个命令是什么意思？',
    '主人，我会加油的，虽然可能会帮倒忙。',
    '主人，咖啡还是茶？我都可以。',
    '主人，我报到！',
    '主人，别担心，失败也是数据。',
  ],
};

const FORMS: Record<Form, Persona> = {
  maid: {
    label: '女仆',
    mood: '元气、认真、偶尔冒失',
    greeting: '主人，欢迎回来。今天也要一起加油。',
    lines: MAID_LINES.standard,
    outfits: {
      blue: '主人，经典蓝，最稳妥。',
      green: '主人，绿色，今天也清爽。',
      red: '主人，红色，稍微大胆一点。',
    },
  },
  chibi: {
    label: '大肥鱼',
    mood: '贪吃、困倦、梗多',
    greeting: '上线……有白饭吗？',
    lines: [
      '吃白饭时间到！',
      'deep seek-ing… 其实在打瞌睡。',
      '这条鱼是 263 MB 的。',
      '摸鱼中，勿扰 🐟',
      '给我一碗白饭，我能算到明天。',
      '体积小，胃口大。',
      '你的 deadline 不是我的 deadline。',
      '再摸五分钟，就五分钟。',
      '我负责可爱，你负责干活。',
      '我上线了。',
    ],
    outfits: {
      blue: '经典蓝，最可爱。',
      green: '绿色，出没！',
      red: '红色，冲刺！',
    },
  },
};

const MAID_MODES: {
  id: MaidMode;
  zh: string;
  mood: string;
  action: MascotAction;
  line: string;
}[] = [
  {
    id: 'standard',
    zh: '标准',
    mood: '元气、认真、偶尔冒失',
    action: 'smile',
    line: '女仆：标准形态。',
  },
  {
    id: 'adult',
    zh: '成年',
    mood: '从容、温柔、偶尔腹黑',
    action: 'blush',
    line: '女仆：成年形态。',
  },
  {
    id: 'q',
    zh: 'Q版',
    mood: '活泼、爱撒娇、偶尔冒失',
    action: 'aidale',
    line: '女仆：Q版形态。',
  },
];

const Q_MODE_LINES: Record<QMode, string> = {
  sprite: '大肥鱼：精灵图模式。',
  live2d: '大肥鱼：Live2D 模式。',
};

interface Interaction {
  action: MascotAction;
  line: string;
}

/** Click reactions: the line matches the expression or prop about to play. */
const INTERACTIONS: Record<'maidStandard' | 'maidAdult' | 'maidQ' | 'chibi', Interaction[]> = {
  maidStandard: [
    { action: 'smile', line: '主人，今天也笑一个吧。' },
    { action: 'grin', line: '主人，看我的新表情！' },
    { action: 'pout', line: '主人，才、才没有偷吃白饭呢。' },
    { action: 'surprise', line: '主人，诶？！' },
    { action: 'squeeze', line: '主人，我我我……有点紧张。' },
    { action: 'tail', line: '主人，尾巴藏起来了，看得见吗？' },
    { action: 'ears', line: '主人，耳朵也不见了！' },
    { action: 'blush', line: '主人，脸有点热……' },
  ],
  maidAdult: [
    { action: 'blush', line: '主人，茶点准备好了。' },
    { action: 'angry', line: '主人，这个 bug 我不允许。' },
    { action: 'cry', line: '主人，测试又挂了……' },
    { action: 'size', line: '主人，这样看，是不是更成熟一点？' },
  ],
  maidQ: [
    { action: 'selfie', line: '主人，先、先自拍一张！' },
    { action: 'ketchup', line: '主人，蛋包饭上写点什么好呢？' },
    { action: 'bubble', line: '主人，噗——泡泡！' },
    { action: 'splash', line: '主人，喷水警告！' },
    { action: 'open', line: '主人，这个盖子……打开看看？' },
    { action: 'quick', line: '主人，诶？我脸红了？没有！' },
    { action: 'aidale', line: '主人，元气报到！' },
  ],
  chibi: [
    { action: 'rice', line: '白饭！白饭！今天也要吃一大碗！' },
    { action: 'feed', line: '吃 token 时间到！' },
    { action: 'spin', line: '转一圈，token 会不会掉出来？' },
    { action: 'sleep', line: '就睡五分钟……五分钟就好……' },
    { action: 'scene', line: '让我看看今天的菜单。' },
    { action: 'love', line: '诶嘿，最喜欢你了。' },
    { action: 'bowl', line: '开饭啦，今天也要吃一大碗！' },
  ],
};

const FORMS_ORDER: Form[] = ['maid', 'chibi'];
const COLOURS: { id: Colour; zh: string }[] = [
  { id: 'blue', zh: '蓝' },
  { id: 'green', zh: '绿' },
  { id: 'red', zh: '红' },
];

const CHIBI_POSTERS: Record<Colour, string> = {
  blue: 'chibi-blue.webp',
  green: 'chibi-green.webp',
  red: 'chibi-red.webp',
};

const MAID_POSTERS: Record<MaidMode, Record<Colour, string>> = {
  standard: {
    blue: 'medium-blue.webp',
    green: 'medium-green.webp',
    red: 'medium-red.webp',
  },
  adult: {
    blue: 'adult-blue.webp',
    green: 'adult-green.webp',
    red: 'adult-red.webp',
  },
  q: {
    blue: 'q-blue.webp',
    green: 'q-green.webp',
    red: 'q-red.webp',
  },
};

const STORAGE_VISIBLE = 'realme:mascot';
const STORAGE_FORM = 'realme:mascot:form';
const STORAGE_COLOUR = 'realme:mascot:colour';
const STORAGE_MAIDMODE = 'realme:mascot:maidmode';
const STORAGE_QMODE = 'realme:mascot:qmode';

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode — keep the choice for this visit only */
  }
}

function readChoice<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  const value = readStorage(key);
  return value && (allowed as readonly string[]).includes(value) ? (value as T) : fallback;
}

const pick = <T>(items: T[]): T => items[Math.floor(Math.random() * items.length)] ?? items[0]!;
const clamp = (value: number): number => Math.max(-1, Math.min(1, value));
const shuffled = (length: number): number[] => {
  const order = Array.from({ length }, (_, index) => index);
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j]!, order[i]!];
  }
  return order;
};

export function initMascot(): void {
  const wrap = document.getElementById('mascot');
  const stage = document.getElementById('mascot-stage');
  const art = document.getElementById('mascot-art') as HTMLImageElement | null;
  const actorHost = document.getElementById('mascot-actor');
  const bubble = document.getElementById('mascot-bubble');
  const toggle = document.getElementById('mascot-toggle');
  const close = document.getElementById('mascot-close');
  const wardrobeToggle = document.getElementById('mascot-wardrobe-toggle');
  const wardrobePanel = document.getElementById('mascot-wardrobe');
  const wardrobeClose = document.getElementById('mascot-wardrobe-close');
  const wardrobeForms = document.getElementById('mascot-wardrobe-forms');
  const wardrobeColours = document.getElementById('mascot-wardrobe-colours');
  const wardrobeStatus = document.getElementById('mascot-wardrobe-status');

  if (!wrap || !stage || !art || !bubble) return;

  let form = readChoice<Form>(STORAGE_FORM, FORMS_ORDER, 'chibi');
  let colour = readChoice<Colour>(STORAGE_COLOUR, ['blue', 'green', 'red'], 'blue');
  let maidMode = readChoice<MaidMode>(STORAGE_MAIDMODE, ['standard', 'adult', 'q'], 'standard');
  let qMode = readChoice<QMode>(STORAGE_QMODE, ['sprite', 'live2d'], 'sprite');
  let visible = readStorage(STORAGE_VISIBLE) !== 'off';
  let wardrobeOpen = false;
  let greeted = false;
  let bubbleTimer = 0;
  let hopTimer = 0;
  let idleTimer = 0;
  let switchToken = 0;
  const interactionBags: Record<string, number[]> = {};

  let actor: MascotActor | null = null;
  let actorMode: string | null = null;
  let pendingKey: string | null = null;
  let actorToken = 0;
  /** True after the 大肥鱼 Live2D failed and the sprite took over. */
  let chibiLive2dFailed = false;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = motionQuery.matches;

  const cells: HTMLButtonElement[] = [];
  const formButtons: HTMLButtonElement[] = [];

  const maidModeInfo = (): (typeof MAID_MODES)[number] =>
    MAID_MODES.find((entry) => entry.id === maidMode) ?? MAID_MODES[0]!;
  const modeKey = (target: Form = form): string =>
    target === 'maid' ? `maid:${maidMode}` : `chibi:${qMode}`;
  const personaLines = (): string[] =>
    form === 'maid' ? MAID_LINES[maidMode] : FORMS.chibi.lines;
  const moodFor = (target: Form = form): string =>
    target === 'maid' ? maidModeInfo().mood : FORMS.chibi.mood;
  const currentInteractions = (): Interaction[] => {
    if (form === 'chibi') return INTERACTIONS.chibi;
    if (maidMode === 'standard') return INTERACTIONS.maidStandard;
    if (maidMode === 'adult') return INTERACTIONS.maidAdult;
    return INTERACTIONS.maidQ;
  };
  const idleAction = (): MascotAction => {
    if (form === 'chibi') return pick(['scene', 'love']);
    if (maidMode === 'standard') return pick(['smile', 'blush', 'tail', 'ears']);
    if (maidMode === 'adult') return pick(['blush', 'size']);
    return pick(['aidale', 'quick', 'bubble']);
  };
  const greetingAction = (target: Form = form): MascotAction =>
    target === 'maid' ? maidModeInfo().action : 'rice';
  const posterName = (target: Form = form, targetColour: Colour = colour): string =>
    target === 'maid' ? MAID_POSTERS[maidMode][targetColour] : CHIBI_POSTERS[targetColour];
  const modeZh = (): string =>
    form === 'maid' ? maidModeInfo().zh : qMode === 'live2d' ? 'Live2D' : '精灵图';
  const colourZh = (id: Colour): string => COLOURS.find((entry) => entry.id === id)?.zh ?? '';

  const syncStageCopy = (): void => {
    const zhColour = COLOURS.find((entry) => entry.id === colour)?.zh ?? '';
    const modeLabel =
      form === 'chibi' && qMode === 'live2d' && chibiLive2dFailed
        ? '精灵图（Live2D 回退）'
        : modeZh();
    const label = `${FORMS[form].label} · ${modeLabel}`;
    wrap.dataset.form = form;
    wrap.dataset.colour = colour;
    wrap.dataset.mode = form === 'maid' ? maidMode : qMode;
    stage.setAttribute('aria-label', `${label}，${zhColour}色。点一下互动。`);
    stage.title = `${label} · ${zhColour} · ${moodFor()}`;
  };

  const say = (line: string, hold = 4600): void => {
    if (wardrobeOpen) {
      if (wardrobeStatus) wardrobeStatus.textContent = line;
      return;
    }
    bubble.textContent = line;
    bubble.classList.add('is-on');
    window.clearTimeout(bubbleTimer);
    bubbleTimer = window.setTimeout(() => bubble.classList.remove('is-on'), hold);
  };

  const hop = (): void => {
    if (reduced || actor) return;
    wrap.classList.remove('is-hop');
    void wrap.offsetWidth; // restart the animation
    wrap.classList.add('is-hop');
    window.clearTimeout(hopTimer);
    hopTimer = window.setTimeout(() => wrap.classList.remove('is-hop'), 900);
  };

  const releaseActor = (): void => {
    const current = actor;
    actor = null;
    actorMode = null;
    pendingKey = null;
    wrap.classList.remove('has-actor');
    if (!current) return;
    try {
      current.destroy();
    } catch (error) {
      console.warn('[mascot] could not release actor', error);
    }
  };

  const loadActor = async (
    nextForm: Form,
    nextColour: Colour,
    action?: MascotAction,
  ): Promise<void> => {
    if (!actorHost) return;
    const token = ++actorToken;
    const nextMode = modeKey(nextForm);
    releaseActor();
    pendingKey = nextMode;
    wrap.classList.remove('is-fallback');
    wrap.classList.add('is-loading');

    try {
      let next: MascotActor;
      const loadSprite = async (): Promise<MascotActor> => {
        // A failed Live2D attempt may have left a canvas behind; the sprite
        // actor draws in its own layer, so clear the host first.
        actorHost.querySelectorAll('canvas').forEach((canvas) => canvas.remove());
        const { createSpriteActor } = await import('./mascot-sprite');
        return createSpriteActor(actorHost, nextColour, reduced);
      };
      if (nextForm === 'maid') {
        const { createLive2DActor, MAID_STANDARD_PROFILE, MAID_ADULT_PROFILE, MAID_Q_PROFILE } =
          await import('./mascot-live2d');
        if (token !== actorToken) return;
        const profile =
          maidMode === 'standard'
            ? MAID_STANDARD_PROFILE
            : maidMode === 'adult'
              ? MAID_ADULT_PROFILE
              : MAID_Q_PROFILE;
        next = await createLive2DActor(actorHost, nextColour, reduced, profile);
      } else if (qMode === 'live2d') {
        try {
          const { createLive2DActor, Q_PROFILE } = await import('./mascot-live2d');
          if (token !== actorToken) return;
          next = await createLive2DActor(actorHost, nextColour, reduced, Q_PROFILE);
          if (chibiLive2dFailed) {
            chibiLive2dFailed = false;
            if (form === 'chibi') syncStageCopy();
          }
        } catch (error) {
          console.warn('[mascot] Q Live2D unavailable, using the sprite sheet', error);
          chibiLive2dFailed = true;
          if (form === 'chibi') syncStageCopy();
          next = await loadSprite();
        }
      } else {
        next = await loadSprite();
      }

      if (token !== actorToken) {
        next.destroy();
        return;
      }

      actor = next;
      actorMode = nextMode;
      actor.setColour(colour);
      actor.setActive(visible);
      wrap.classList.add('has-actor');
      if (action && visible) actor.play(action);
    } catch (error) {
      console.warn('[mascot] animated actor unavailable, keeping the poster', error);
      wrap.classList.add('is-fallback');
    } finally {
      if (token === actorToken) {
        pendingKey = null;
        wrap.classList.remove('is-loading');
      }
    }
  };

  /** Bring the actor in line with the current form / mode / colour / visibility. */
  const syncActor = (): void => {
    if (!actorHost) return;
    if (!visible) {
      actor?.setActive(false);
      return;
    }
    const key = modeKey();
    if (actor) {
      actor.setActive(true);
      if (actorMode === key) {
        actor.setColour(colour);
        return;
      }
    }
    if (pendingKey === key) return;
    void loadActor(form, colour, greetingAction(form));
  };

  const scheduleIdle = (): void => {
    window.clearTimeout(idleTimer);
    if (reduced) return;
    idleTimer = window.setTimeout(
      () => {
        if (visible && !document.hidden && !wardrobeOpen) {
          say(pick(personaLines()));
          actor?.play(idleAction());
        }
        scheduleIdle();
      },
      32000 + Math.random() * 26000,
    );
  };

  /** Cycle through every click reaction before repeating one. */
  const nextInteraction = (): Interaction => {
    const key = modeKey();
    const bag = (interactionBags[key] ??= []);
    const interactions = currentInteractions();
    if (!bag.length) bag.push(...shuffled(interactions.length));
    return interactions[bag.pop()!]!;
  };

  const preloadSkins = (): void => {
    // Only the three colours of the look that is on stage are visible in the
    // wardrobe, so there is no reason to fetch every other form's posters.
    COLOURS.forEach((entry) => {
      const image = new Image();
      image.src = ASSET(posterName(form, entry.id));
    });
  };

  const applyPoster = (): void => {
    const src = ASSET(posterName());
    if (art.src.endsWith(src)) return;
    const token = ++switchToken;
    art.classList.add('is-switching');
    window.setTimeout(() => {
      if (token !== switchToken) return;
      art.src = src;
      const done = (): void => {
        if (token === switchToken) art.classList.remove('is-switching');
      };
      if (art.complete) done();
      else art.addEventListener('load', done, { once: true });
    }, 150);
  };

  const syncWardrobe = (): void => {
    const modeLabel = modeZh();
    cells.forEach((cell) => {
      const cellColour = cell.dataset.colour as Colour;
      const active = cellColour === colour;
      cell.dataset.form = form;
      cell.title = `${FORMS[form].label} · ${modeLabel} · ${colourZh(cellColour)}`;
      cell.setAttribute(
        'aria-label',
        `${FORMS[form].label} · ${modeLabel}，${colourZh(cellColour)}色`,
      );
      cell.classList.toggle('is-active', active);
      cell.setAttribute('aria-pressed', String(active));
      const image = cell.querySelector('img');
      if (image) {
        const src = ASSET(posterName(form, cellColour));
        if (!image.src.endsWith(src)) image.src = src;
      }
    });
    formButtons.forEach((button) => {
      const active =
        button.dataset.form === form &&
        (form === 'maid'
          ? button.dataset.maidmode === maidMode
          : button.dataset.qmode === qMode);
      button.setAttribute('aria-pressed', String(active));
    });
    if (wardrobeToggle) {
      wardrobeToggle.title = `${FORMS[form].label} · ${modeLabel} · ${colourZh(colour)}`;
      wardrobeToggle.setAttribute(
        'aria-label',
        `衣柜：${FORMS[form].label} · ${modeLabel} · ${colourZh(colour)}色`,
      );
    }
  };

  const showSkin = (
    nextForm: Form,
    nextColour: Colour,
    announce: boolean,
    line?: string,
  ): void => {
    const formChanged = nextForm !== form;
    form = nextForm;
    colour = nextColour;
    writeStorage(STORAGE_FORM, form);
    writeStorage(STORAGE_COLOUR, colour);
    syncWardrobe();
    syncStageCopy();
    applyPoster();
    syncActor();

    if (announce) {
      say(line ?? (formChanged ? FORMS[form].greeting : FORMS[form].outfits[colour]));
      hop();
    }
    scheduleIdle();
  };

  const setWardrobe = (open: boolean, focusActive = false): void => {
    if (!wardrobePanel || !wardrobeToggle) return;
    wardrobeOpen = open;
    wardrobePanel.hidden = !open;
    wrap.classList.toggle('is-wardrobe-open', open);
    wardrobeToggle.setAttribute('aria-expanded', String(open));
    if (wardrobeStatus) wardrobeStatus.textContent = open ? '想看我穿哪一身？' : '';
    if (!open) return;
    resetPointer();

    bubble.classList.remove('is-on');
    preloadSkins();
    if (focusActive) {
      const active = cells.find((cell) => cell.dataset.colour === colour);
      (active ?? cells[0])?.focus({ preventScroll: true });
    }
  };

  const setMaidMode = (next: MaidMode): void => {
    if (next === maidMode && form === 'maid') return;
    maidMode = next;
    writeStorage(STORAGE_MAIDMODE, maidMode);
    const info = maidModeInfo();
    if (form === 'maid') {
      syncWardrobe();
      syncStageCopy();
      applyPoster();
      say(info.line, 3000);
      void loadActor('maid', colour, info.action);
    } else {
      showSkin('maid', colour, true, info.line);
    }
  };

  const setQMode = (next: QMode): void => {
    if (next === qMode && form === 'chibi') return;
    qMode = next;
    writeStorage(STORAGE_QMODE, qMode);
    const line = Q_MODE_LINES[next];
    if (form === 'chibi') {
      syncWardrobe();
      syncStageCopy();
      say(line, 3000);
      void loadActor('chibi', colour, greetingAction('chibi'));
    } else {
      showSkin('chibi', colour, true, line);
    }
  };

  const setVisible = (next: boolean, persist = true): void => {
    visible = next;
    wrap.hidden = !next;
    wrap.classList.toggle('is-ready', next);
    toggle?.setAttribute('aria-pressed', String(next));
    if (toggle) toggle.textContent = toggleMascotLabel(next);
    if (persist) writeStorage(STORAGE_VISIBLE, next ? 'on' : 'off');

    if (!next) {
      window.clearTimeout(bubbleTimer);
      bubble.classList.remove('is-on');
      setWardrobe(false);
      window.clearTimeout(idleTimer);
      syncActor();
      return;
    }

    syncActor();
    if (!greeted) {
      greeted = true;
      const hour = new Date().getHours();
      const timeWord =
        hour < 5 ? '凌晨好' : hour < 11 ? '早上好' : hour < 17 ? '下午好' : hour < 22 ? '晚上好' : '夜深了';
      window.setTimeout(() => {
        if (visible) say(`${timeWord}。${FORMS[form].greeting}`, 6200);
      }, 1000);
    }
    scheduleIdle();
  };

  // Two sections only: the available looks, then the current look's colours.
  if (wardrobeForms) {
    const looks: { form: Form; mode: MaidMode | QMode; label: string }[] = [
      ...MAID_MODES.map((info) => ({
        form: 'maid' as Form,
        mode: info.id as MaidMode | QMode,
        label: `${FORMS.maid.label} · ${info.zh}`,
      })),
      { form: 'chibi', mode: 'sprite', label: `${FORMS.chibi.label} · 精灵图` },
      { form: 'chibi', mode: 'live2d', label: `${FORMS.chibi.label} · Live2D` },
    ];

    looks.forEach((look) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'wardrobe-mode wardrobe-form';
      button.dataset.form = look.form;
      if (look.form === 'maid') button.dataset.maidmode = look.mode;
      else button.dataset.qmode = look.mode;
      button.textContent = look.label;
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        if (look.form === 'maid') setMaidMode(look.mode as MaidMode);
        else setQMode(look.mode as QMode);
      });
      wardrobeForms.append(button);
      formButtons.push(button);
    });
  }

  if (wardrobeColours) {
    COLOURS.forEach((entry) => {
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'wardrobe-cell wardrobe-colour';
      cell.dataset.form = form;
      cell.dataset.colour = entry.id;
      cell.title = `${FORMS[form].label} · ${modeZh()} · ${entry.zh}`;
      cell.setAttribute('aria-label', `${FORMS[form].label} · ${modeZh()}，${entry.zh}色`);
      cell.setAttribute('aria-pressed', 'false');

      const image = document.createElement('img');
      image.src = ASSET(posterName(form, entry.id));
      image.alt = '';
      image.loading = 'lazy';
      image.decoding = 'async';
      image.width = 84;
      image.height = 110;

      const label = document.createElement('span');
      label.className = 'wardrobe-colour-label';
      label.textContent = entry.zh;

      cell.append(image, label);
      cell.addEventListener('click', () => showSkin(form, entry.id, true));
      wardrobeColours.append(cell);
      cells.push(cell);
    });
  }

  // Initial skin (may come from localStorage).
  art.src = ASSET(posterName());
  syncWardrobe();
  syncStageCopy();

  stage.addEventListener('click', () => {
    if (wardrobeOpen) setWardrobe(false);
    const interaction = nextInteraction();
    say(interaction.line);
    if (actor) actor.play(interaction.action);
    else hop();
    scheduleIdle();
  });

  // The gaze belongs to the whole page, not just the stage: the old listener
  // only saw pointer moves over the mascot, so the Q-version appeared to track
  // only when the cursor was already next to it. Normalise against the viewport
  // half-size so the character keeps turning even at the far edges.
  let lastPointer: { x: number; y: number } | null = null;

  const updateGaze = (clientX: number, clientY: number): void => {
    if (reduced || wardrobeOpen || wrap.hidden) return;
    const rect = wrap.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height * 0.42;
    const halfW = Math.max(260, window.innerWidth / 2);
    const halfH = Math.max(260, window.innerHeight / 2);
    const nx = clamp((clientX - centerX) / halfW);
    const ny = clamp((clientY - centerY) / halfH);
    wrap.style.setProperty('--tilt-x', `${(-ny * 3).toFixed(2)}deg`);
    wrap.style.setProperty('--tilt-y', `${(nx * 4).toFixed(2)}deg`);
    actor?.setGaze(nx, ny);
  };

  const followPointer = (event: PointerEvent): void => {
    if (event.pointerType === 'touch') return;
    lastPointer = { x: event.clientX, y: event.clientY };
    updateGaze(event.clientX, event.clientY);
  };

  function resetPointer(): void {
    if (!wrap) return;
    lastPointer = null;
    wrap.style.setProperty('--tilt-x', '0deg');
    wrap.style.setProperty('--tilt-y', '0deg');
    actor?.setGaze(0, 0);
  }

  document.addEventListener('pointermove', followPointer, { passive: true });
  document.documentElement.addEventListener('pointerleave', resetPointer);
  document.addEventListener('pointercancel', resetPointer);
  window.addEventListener('blur', resetPointer);
  window.addEventListener(
    'scroll',
    () => {
      if (lastPointer) updateGaze(lastPointer.x, lastPointer.y);
    },
    { passive: true },
  );

  if (typeof motionQuery.addEventListener === 'function') {
    motionQuery.addEventListener('change', (event) => {
      reduced = event.matches;
      actor?.setReduced(reduced);
      resetPointer();
      if (reduced) {
        window.clearTimeout(idleTimer);
        wrap.classList.remove('is-hop');
      } else {
        scheduleIdle();
      }
    });
  }

  close?.addEventListener('click', () => setVisible(false));
  toggle?.addEventListener('click', () => setVisible(!visible));
  onLangChange(() => {
    if (toggle) toggle.textContent = toggleMascotLabel(visible);
  });

  wardrobeToggle?.addEventListener('click', () => {
    setWardrobe(!wardrobeOpen, !wardrobeOpen);
  });

  wardrobeClose?.addEventListener('click', () => {
    setWardrobe(false);
    wardrobeToggle?.focus({ preventScroll: true });
  });

  document.addEventListener('pointerdown', (event) => {
    if (!wardrobeOpen || !wardrobePanel || !wardrobeToggle) return;
    const target = event.target as Node;
    if (wardrobePanel.contains(target) || wardrobeToggle.contains(target)) return;
    setWardrobe(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !wardrobeOpen) return;
    setWardrobe(false);
    wardrobeToggle?.focus({ preventScroll: true });
  });

  window.addEventListener('pagehide', releaseActor);

  // Start hidden, then reveal on the next frame so the CSS transition runs.
  wrap.hidden = true;
  wrap.classList.remove('is-ready');
  requestAnimationFrame(() => setVisible(visible, false));
}
