import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import type { BackgroundHandle } from './background';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(pointer: fine)').matches;

/* ------------------------------------------------------------------ cursor */

function initCursor() {
  if (!finePointer() || reducedMotion()) return;

  const dot = document.querySelector<HTMLElement>('.cursor-dot');
  const ring = document.querySelector<HTMLElement>('.cursor-ring');
  if (!dot || !ring) return;

  document.documentElement.classList.add('has-cursor');

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let rx = x;
  let ry = y;

  window.addEventListener(
    'pointermove',
    (event) => {
      x = event.clientX;
      y = event.clientY;
      dot.style.opacity = '1';
      ring.style.opacity = '1';

      const target = event.target as Element | null;
      const interactive = target?.closest('a, button, [data-cursor="hover"]');
      ring.classList.toggle('is-hover', Boolean(interactive));
    },
    { passive: true },
  );

  document.addEventListener('pointerleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  const loop = () => {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  };
  loop();
}

/* ---------------------------------------------------------------- magnetic */

function initMagnetic() {
  if (reducedMotion() || !finePointer()) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      gsap.to(el, { x: dx * 0.18, y: dy * 0.24, duration: 0.5, ease: 'power3.out' });
    });
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

/* -------------------------------------------------------------------- tilt */

function initTilt() {
  if (reducedMotion() || !finePointer()) return;

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    gsap.set(el, { transformPerspective: 900 });
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);
      gsap.to(el, {
        rotateY: (px - 0.5) * 7,
        rotateX: (0.5 - py) * 7,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' });
    });
  });
}

/* ------------------------------------------------------------------ reveal */

function initReveal() {
  const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');

  if (reducedMotion()) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }

  items.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onStart: () => el.classList.add('is-in'),
    });
  });
}

/* --------------------------------------------------------------- counters */

function initCounters() {
  const nodes = gsap.utils.toArray<HTMLElement>('[data-count]');

  nodes.forEach((el) => {
    const target = Number(el.dataset.count || 0);

    if (reducedMotion()) {
      el.textContent = String(target);
      return;
    }

    const state = { value: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(state, {
          value: target,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = String(Math.round(state.value));
          },
        });
      },
    });
  });
}

/* ----------------------------------------------------------------- scramble */

const GLYPHS = '█▓▒░<>/\\[]{}()#$%&*+=~^';

function initScramble() {
  if (reducedMotion()) return;

  document.querySelectorAll<HTMLElement>('.section-head h2').forEach((el) => {
    const finalText = el.textContent ?? '';
    let frame = 0;
    let raf = 0;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        const total = Math.max(18, finalText.length * 3);
        const step = () => {
          frame += 1;
          const progress = frame / total;
          const revealed = Math.floor(finalText.length * progress);
          let out = '';
          for (let i = 0; i < finalText.length; i += 1) {
            const ch = finalText[i];
            if (ch === ' ' || i < revealed) out += ch;
            else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
          el.textContent = out;
          if (progress < 1) raf = requestAnimationFrame(step);
          else el.textContent = finalText;
        };
        step();
        window.setTimeout(() => cancelAnimationFrame(raf), 2000);
      },
    });
  });
}

/* -------------------------------------------------------------------- misc */

function initHeroParallax() {
  if (reducedMotion()) return;

  const hero = document.querySelector<HTMLElement>('.hero');
  if (!hero) return;

  const layers: Array<[string, number]> = [
    ['.hero-title', -110],
    ['.hero-status', -40],
    ['.hero-role', -60],
    ['.hero-lede', -30],
  ];

  layers.forEach(([selector, distance]) => {
    const el = hero.querySelector<HTMLElement>(selector);
    if (!el) return;
    gsap.to(el, {
      y: distance,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      },
    });
  });
}

function initClock() {
  const node = document.getElementById('clock');
  if (!node) return;

  const tick = () => {
    try {
      node.textContent = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Shanghai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date());
    } catch {
      node.textContent = new Date().toLocaleTimeString();
    }
  };
  tick();
  window.setInterval(tick, 1000);
}

function initLatency() {
  const node = document.getElementById('latency');
  if (!node) return;

  const connection = (navigator as Navigator & {
    connection?: { rtt?: number; effectiveType?: string };
  }).connection;

  if (connection?.rtt) {
    node.textContent = String(connection.rtt);
  } else {
    node.textContent = '--';
  }
}

function initYear() {
  const node = document.getElementById('year');
  if (node) node.textContent = String(new Date().getFullYear());
}

/* -------------------------------------------------------------------- main */

export interface UIHandle {
  scrollToTop: () => void;
}

export function initUI(background: BackgroundHandle | null): UIHandle {
  let lenis: Lenis | null = null;

  // Smooth scrolling first: ScrollTrigger needs to listen to Lenis' scroll.
  if (!reducedMotion()) {
    const instance = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      anchors: true,
    });
    lenis = instance;
    instance.on('scroll', () => {
      ScrollTrigger.update();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      background?.setScroll(ratio);
    });
    gsap.ticker.add((time) => instance.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    document.documentElement.classList.add('no-anim');
    window.addEventListener(
      'scroll',
      () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        background?.setScroll(max > 0 ? window.scrollY / max : 0);
      },
      { passive: true },
    );
  }

  initCursor();
  initMagnetic();
  initTilt();
  initReveal();
  initCounters();
  initScramble();
  initHeroParallax();
  initClock();
  initLatency();
  initYear();

  return {
    scrollToTop: () => {
      if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    },
  };
}
