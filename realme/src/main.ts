import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';
import '@fontsource/orbitron/400.css';
import '@fontsource/orbitron/700.css';
import '@fontsource/orbitron/900.css';

import './styles.css';
import './content.css';

import { initBackground } from './background';
import { runBoot, runQuickBoot, typeRoles } from './boot';
import { initContent, prefetchIndex } from './content';
import { initI18n, onLangChange } from './i18n';
import { initMascot } from './mascot';
import { initNav } from './nav';
import { initUI } from './ui';

const BOOT_KEY = 'realme:booted';

const sessionSeen = (): boolean => {
  try {
    return window.sessionStorage.getItem(BOOT_KEY) === '1';
  } catch {
    return false;
  }
};

const markSession = (): void => {
  try {
    window.sessionStorage.setItem(BOOT_KEY, '1');
  } catch {
    /* private mode — the full console can replay next time */
  }
};

const canvas = document.getElementById('bg') as HTMLCanvasElement | null;
const background = canvas ? initBackground(canvas) : null;

initI18n();
initNav();
const ui = initUI(background);
initContent({ scrollToTop: ui.scrollToTop });

const boot = document.getElementById('boot');
const bootLog = document.getElementById('boot-log');
const roleText = document.getElementById('role-text');

async function main() {
  if (boot && bootLog) {
    if (sessionSeen()) {
      await runQuickBoot(boot, bootLog);
    } else {
      markSession();
      await runBoot(boot, bootLog);
    }
  }
  if (roleText) typeRoles(roleText);
  initMascot();
  void prefetchIndex();
}

onLangChange(() => {
  if (roleText) typeRoles(roleText);
});

void main();
