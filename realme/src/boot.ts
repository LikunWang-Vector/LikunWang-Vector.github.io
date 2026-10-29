import { roles, t } from './i18n';

interface BootLine {
  text: string;
  cls?: string;
}

const LINES: BootLine[] = [
  { text: '[ 0.000 ] initializing neural link ........ OK', cls: 'b-ok' },
  { text: '[ 0.032 ] mounting shader pipeline ....... OK', cls: 'b-ok' },
  { text: '[ 0.071 ] calibration: neon grid ......... OK', cls: 'b-ok' },
  { text: '[ 0.104 ] identity: wang_likun ........... ' , cls: '' },
  { text: '           decryption key accepted ............ OK', cls: 'b-ok' },
  { text: '[ 0.161 ] visitor signature: unknown ....... ' , cls: '' },
  { text: '           access granted ...................... OK', cls: 'b-ok' },
  { text: '' },
  { text: '  ┌─ REALME CONSOLE ───────────────────────────┐', cls: 'b-key' },
  { text: '  │  welcome, operator.                        │', cls: 'b-key' },
  { text: '  └────────────────────────────────────────────┘', cls: 'b-key' },
  { text: '' },
  { text: '  > _', cls: '' },
];

interface BootState {
  skipped: boolean;
  onSkip?: () => void;
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function sleep(ms: number, state: BootState): Promise<void> {
  return new Promise((resolve) => {
    if (state.skipped) return resolve();
    const timer = window.setTimeout(resolve, ms);
    state.onSkip = () => {
      window.clearTimeout(timer);
      resolve();
    };
  });
}

export async function runBoot(root: HTMLElement, log: HTMLElement): Promise<void> {
  document.body.classList.add('is-booting');

  if (reducedMotion()) {
    root.classList.add('is-done');
    document.body.classList.remove('is-booting');
    return;
  }

  const state: BootState = { skipped: false };

  const skip = (event?: Event) => {
    // Space / arrows would also scroll the page behind the overlay.
    event?.preventDefault();
    if (state.skipped) return;
    state.skipped = true;
    state.onSkip?.();
    log.textContent = LINES.map((line) => line.text).join('\n');
    finish();
  };

  window.addEventListener('keydown', skip, { once: true });
  window.addEventListener('pointerdown', skip, { once: true });

  log.textContent = '';
  for (const line of LINES) {
    if (state.skipped) break;
    const span = document.createElement('span');
    if (line.cls) span.className = line.cls;
    log.appendChild(span);

    for (const char of line.text) {
      if (state.skipped) break;
      span.textContent += char;
      await sleep(char === ' ' ? 4 : 9, state);
    }
    span.textContent += '\n';
    await sleep(55, state);
  }

  if (!state.skipped) await sleep(420, state);
  finish();

  function finish() {
    root.classList.add('is-done');
    document.body.classList.remove('is-booting');
    window.removeEventListener('keydown', skip);
    window.removeEventListener('pointerdown', skip);
  }
}

/**
 * The short version, used when the console already ran earlier in this tab.
 * A single sweep of the scanline, then the page is usable in about half a
 * second — noticeably smoother than replaying the full typewriter log.
 */
export async function runQuickBoot(root: HTMLElement, log: HTMLElement): Promise<void> {
  if (reducedMotion()) {
    root.classList.add('is-done');
    return;
  }

  root.classList.add('is-quick');
  document.body.classList.add('is-booting');
  log.textContent = `${t('quickBoot')} …… OK`;

  await new Promise((resolve) => window.setTimeout(resolve, 240));
  root.classList.add('is-done');
  document.body.classList.remove('is-booting');

  // Keep the overlay mounted until its fade finishes so it cannot reappear.
  await new Promise((resolve) => window.setTimeout(resolve, 520));
  root.hidden = true;
}

let roleGeneration = 0;

export function typeRoles(target: HTMLElement): void {
  const generation = ++roleGeneration;
  const words = roles();

  if (reducedMotion()) {
    target.textContent = words[0];
    return;
  }

  let index = 0;
  let char = 0;
  let deleting = false;

  const tick = () => {
    if (generation !== roleGeneration) return;
    const word = words[index]!;
    if (!deleting) {
      char += 1;
      target.textContent = word.slice(0, char);
      if (char === word.length) {
        deleting = true;
        window.setTimeout(tick, 1900);
        return;
      }
      window.setTimeout(tick, 55 + Math.random() * 45);
    } else {
      char -= 1;
      target.textContent = word.slice(0, char);
      if (char === 0) {
        deleting = false;
        index = (index + 1) % words.length;
        window.setTimeout(tick, 320);
        return;
      }
      window.setTimeout(tick, 26);
    }
  };

  tick();
}
