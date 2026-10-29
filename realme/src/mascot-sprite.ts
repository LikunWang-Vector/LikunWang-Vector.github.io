/**
 * 大肥鱼 sprite actor — the default Q look and the Live2D fallback.
 *
 * The independent small Live2D model is optional; the default is this
 * MIT-licensed 鲸蓝 (jinglan) 8×11 sprite sheet, which keeps the character
 * animated: 192×208 cells, six body actions, two run cycles and sixteen gaze
 * directions at 22.5° steps. The sheet comes from the 大肥鱼 lineage credited to
 * 这个刀子真甜; see the README.
 *
 * The green/red sheets are palette variants generated offline by rotating only
 * the blue hues, so line art, skin and the white apron stay identical.
 */
import type { MascotAction, MascotActor, MascotColour } from './mascot-types';

const CELL_W = 192;
const CELL_H = 208;
const SHEETS: Record<MascotColour, string> = {
  blue: 'chibi-sprite-blue.webp',
  green: 'chibi-sprite-green.webp',
  red: 'chibi-sprite-red.webp',
};

interface RowDef {
  row: number;
  frames: number;
  durations: number[];
}

const IDLE: RowDef = { row: 0, frames: 6, durations: [280, 110, 110, 140, 140, 320] };

const FOCUS: RowDef = { row: 7, frames: 6, durations: [120, 120, 120, 120, 120, 220] };
const WAITING: RowDef = { row: 6, frames: 6, durations: [150, 150, 150, 150, 150, 260] };
const REVIEW: RowDef = { row: 8, frames: 6, durations: [150, 150, 150, 150, 150, 280] };
const WAVE: RowDef = { row: 3, frames: 4, durations: [140, 140, 140, 280] };
const JUMP: RowDef = { row: 4, frames: 5, durations: [140, 140, 140, 140, 280] };

const ACTIONS: Partial<Record<MascotAction, RowDef>> = {
  wave: WAVE,
  jump: JUMP,
  failed: { row: 5, frames: 8, durations: [140, 140, 140, 140, 140, 140, 140, 240] },
  waiting: WAITING,
  focus: FOCUS,
  review: REVIEW,
  // 大肥鱼 actions: the clip that reads closest on the sprite sheet.
  rice: WAITING,
  feed: FOCUS,
  sleep: WAITING,
  scene: REVIEW,
  spin: JUMP,
  love: WAVE,
  bowl: REVIEW,
};

const sheetUrl = (colour: MascotColour): string =>
  `${import.meta.env.BASE_URL}mascot/${SHEETS[colour]}`;

function loadImage(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => reject(new Error(`Could not load ${url}`));
    image.src = url;
  });
}

export async function createSpriteActor(
  host: HTMLElement,
  colour: MascotColour,
  reduced: boolean,
): Promise<MascotActor> {
  await loadImage(sheetUrl(colour));

  const el = document.createElement('div');
  el.className = 'mascot-sprite';
  el.setAttribute('aria-hidden', 'true');
  el.style.backgroundImage = `url("${sheetUrl(colour)}")`;
  host.append(el);

  let active = true;
  let isReduced = reduced;
  let raf = 0;
  let last = 0;
  let colourToken = 0;

  let idleIndex = 0;
  let idleElapsed = 0;
  let shot: { def: RowDef; index: number; elapsed: number } | null = null;
  let gazeRow = -1;
  let gazeFrame = 0;
  let drawn = -1;

  const draw = (row: number, frame: number): void => {
    const key = row * 8 + frame;
    if (key === drawn) return;
    drawn = key;
    el.style.backgroundPosition = `${-frame * CELL_W}px ${-row * CELL_H}px`;
  };

  const fit = (): void => {
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (!width || !height) return;
    const scale = Math.min((width * 0.98) / CELL_W, (height * 0.98) / CELL_H);
    el.style.transform = `translateX(-50%) scale(${scale.toFixed(4)})`;
  };

  const observer = new ResizeObserver(fit);
  observer.observe(host);
  fit();

  const advanceShot = (dt: number): void => {
    if (!shot) return;
    shot.elapsed += dt;
    let duration = shot.def.durations[shot.index] ?? 200;
    while (shot.elapsed >= duration) {
      shot.elapsed -= duration;
      shot.index += 1;
      if (shot.index >= shot.def.frames) {
        shot = null;
        idleIndex = 0;
        idleElapsed = 0;
        if (gazeRow >= 0) draw(gazeRow, gazeFrame);
        else draw(IDLE.row, 0);
        return;
      }
      duration = shot.def.durations[shot.index] ?? 200;
    }
    draw(shot.def.row, shot.index);
  };

  const advanceIdle = (dt: number): void => {
    idleElapsed += dt;
    let duration = IDLE.durations[idleIndex] ?? 200;
    let guard = 0;
    while (idleElapsed >= duration && guard < 32) {
      idleElapsed -= duration;
      idleIndex = (idleIndex + 1) % IDLE.frames;
      duration = IDLE.durations[idleIndex] ?? 200;
      guard += 1;
    }
    draw(IDLE.row, idleIndex);
  };

  const tick = (now: number): void => {
    if (!active) {
      raf = 0;
      return;
    }
    raf = requestAnimationFrame(tick);
    const dt = last ? Math.min(now - last, 120) : 16;
    last = now;

    if (isReduced) {
      draw(IDLE.row, 0);
      return;
    }
    if (shot) {
      advanceShot(dt);
    } else if (gazeRow >= 0) {
      draw(gazeRow, gazeFrame);
    } else {
      advanceIdle(dt);
    }
  };

  const syncLoop = (): void => {
    const running = active && !isReduced;
    if (running) {
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    } else if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  draw(IDLE.row, 0);
  syncLoop();

  return {
    setColour(next: MascotColour): void {
      const token = ++colourToken;
      const url = sheetUrl(next);
      const image = new Image();
      image.onload = () => {
        if (token === colourToken) el.style.backgroundImage = `url("${url}")`;
      };
      image.src = url;
    },

    setGaze(x: number, y: number): void {
      if (isReduced) return;
      const nx = Math.max(-1, Math.min(1, x));
      const ny = Math.max(-1, Math.min(1, y));
      if (Math.hypot(nx, ny) < 0.04) {
        gazeRow = -1;
        if (!shot) draw(IDLE.row, idleIndex);
        return;
      }
      // 0° is up, 90° right, 180° down, 270° left.
      const angle = (Math.atan2(nx, -ny) * 180) / Math.PI;
      const index = Math.round(((angle + 360) % 360) / 22.5) % 16;
      gazeRow = index < 8 ? 9 : 10;
      gazeFrame = index % 8;
      // Hold the direction until the pointer moves again; a short timeout made
      // the character snap back to idle even while the cursor was still.
      if (!shot) draw(gazeRow, gazeFrame);
    },

    play(action: MascotAction): void {
      const def = ACTIONS[action];
      if (!def || isReduced) return;
      shot = { def, index: 0, elapsed: 0 };
      draw(def.row, 0);
    },

    setReduced(next: boolean): void {
      isReduced = next;
      last = 0;
      if (next) {
        shot = null;
        gazeRow = -1;
        draw(IDLE.row, 0);
      }
      syncLoop();
    },

    setActive(next: boolean): void {
      active = next;
      last = 0;
      syncLoop();
    },

    destroy(): void {
      observer.disconnect();
      cancelAnimationFrame(raf);
      raf = 0;
      el.remove();
    },
  };
}
