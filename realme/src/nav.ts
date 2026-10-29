/**
 * Header navigation behaviour.
 *
 * Two small jobs:
 *
 *   1. Keep the section links in sync with the hash route (`is-active` plus
 *      `aria-current="page"`).
 *   2. Turn the links into a dropdown below 960 px, where the desktop row no
 *      longer fits. The toggle is only rendered by CSS at that width; the
 *      language pill and exit link keep their fixed slots beside it.
 */

import { onLangChange, t } from './i18n';

let header: HTMLElement | null = null;
let toggle: HTMLButtonElement | null = null;

const isOpen = (): boolean => header?.classList.contains('is-menu-open') ?? false;

function setToggleLabel(): void {
  if (!toggle) return;
  const label = t(isOpen() ? 'menuClose' : 'menuOpen');
  toggle.setAttribute('aria-label', label);
  toggle.setAttribute('title', label);
}

function setMenuOpen(open: boolean, returnFocus = false): void {
  if (!header || !toggle) return;
  header.classList.toggle('is-menu-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  setToggleLabel();
  if (!open && returnFocus) toggle.focus();
}

/** Mark the nav link for `route`; pass null on the landing screen. */
export function setActiveNav(route: string | null): void {
  document.querySelectorAll<HTMLAnchorElement>('.nav a').forEach((link) => {
    const active = route !== null && link.getAttribute('href') === `#/${route}`;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

export function initNav(): void {
  header = document.querySelector<HTMLElement>('.site-header');
  toggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;

  if (toggle) {
    toggle.addEventListener('click', (event) => {
      const open = !isOpen();
      setMenuOpen(open);
      // Keyboard activation (detail 0) moves focus into the panel so the next
      // Tab walks the section links; Escape (handled below) returns focus to
      // this button. Pointer/touch users keep focus on the toggle, so no
      // focus ring flashes on the first link. The frame wait lets the open
      // state's visibility change apply first.
      if (open && event.detail === 0) {
        requestAnimationFrame(() => {
          if (isOpen()) document.querySelector<HTMLAnchorElement>('.nav a')?.focus();
        });
      }
    });
  }

  // Any link in the header (section, brand or exit) finishes the menu action.
  header?.addEventListener('click', (event) => {
    if (!isOpen()) return;
    if ((event.target as Element | null)?.closest('a')) setMenuOpen(false);
  });

  // Clicking the page behind the open dropdown dismisses it.
  document.addEventListener('click', (event) => {
    if (!isOpen()) return;
    const target = event.target as Node | null;
    if (target && header && !header.contains(target)) setMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) setMenuOpen(false, true);
  });

  // The dropdown only exists below 960 px. Leaving that range while it is
  // open would otherwise keep the panel in the layout.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && isOpen()) setMenuOpen(false);
  });

  // The toggle's accessible name follows the UI language.
  onLangChange(setToggleLabel);

  setToggleLabel();
}
