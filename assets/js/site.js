/* ==========================================================================
   Likun Wang — site behaviour
   - Native EN/ZH language switcher
   - Google Translate Element for in-page translation (lazy loaded)
   - Copy buttons, mobile navigation
   ========================================================================== */

(() => {
  'use strict';

  const doc = document;
  const root = doc.documentElement;
  const $ = (sel, ctx = doc) => ctx.querySelector(sel);
  const $$ = (sel, ctx = doc) => Array.from(ctx.querySelectorAll(sel));

  /* ------------------------------------------------------------------------
     Copy to clipboard
     ---------------------------------------------------------------------- */

  const isZh = () => (root.lang || '').toLowerCase().startsWith('zh');
  const copyLabel = () => (isZh() ? '已复制' : 'Copied');
  const copyButtonLabel = () => (isZh() ? '复制' : 'Copy');

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const ta = doc.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    doc.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = doc.execCommand('copy'); } catch (e) { ok = false; }
    ta.remove();
    return ok;
  }

  let copyToastTimer = null;
  function showCopyToast(message) {
    let toast = $('.lgc-copy-toast');
    if (!toast) {
      toast = doc.createElement('div');
      toast.className = 'lgc-copy-toast notranslate';
      toast.setAttribute('role', 'status');
      doc.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(copyToastTimer);
    copyToastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 1600);
  }

  function bindCopyButtons() {
    doc.addEventListener('click', async (event) => {
      const button = event.target.closest('[data-copy-value], [data-copy-target], [data-copy-bibtex]');
      if (!button) return;
      event.preventDefault();
      let value = '';
      if (button.hasAttribute('data-copy-value')) {
        value = button.getAttribute('data-copy-value');
      } else if (button.hasAttribute('data-copy-target')) {
        const target = doc.querySelector(button.getAttribute('data-copy-target'));
        if (target) value = target.textContent || target.value || '';
      } else if (button.hasAttribute('data-copy-bibtex')) {
        const source = doc.getElementById(button.getAttribute('data-copy-bibtex'));
        if (source) value = source.textContent || '';
      }
      if (!value.trim()) return;
      const ok = await copyText(value.trim());
      if (!ok) return;
      if (button.dataset.copyFeedback === 'text') {
        const original = button.textContent;
        button.textContent = copyLabel();
        window.setTimeout(() => { button.textContent = original; }, 1600);
      } else {
        showCopyToast(copyLabel());
      }
      button.setAttribute('aria-label', copyLabel());
      button.setAttribute('title', copyLabel());
      window.setTimeout(() => {
        button.setAttribute('aria-label', copyButtonLabel());
        button.setAttribute('title', copyButtonLabel());
      }, 1600);
    });
  }

  /* ------------------------------------------------------------------------
     Language panel + Google Translate Element (in-page)
     ---------------------------------------------------------------------- */

  let googleWidgetPromise = null;

  function initLanguagePanel() {
    const widget = $('[data-lgc-translate]');
    if (!widget) return;
    const toggle = $('[data-lgc-toggle]', widget);
    const panel = $('#lgc-translate-panel', widget);
    if (!toggle || !panel) return;

    const close = () => {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    };
    const open = () => {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
    };

    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      if (panel.hidden) open(); else close();
    });
    panel.addEventListener('click', (event) => event.stopPropagation());
    doc.addEventListener('click', close);
    doc.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        close();
        toggle.focus();
      }
    });

    $$('[data-lgc-google]', widget).forEach((button) => {
      button.addEventListener('click', () => {
        close();
        googleTranslatePage(button.getAttribute('data-lgc-google'), button);
      });
    });
  }

  function googlePageLanguage() {
    return (root.lang || 'en').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
  }

  function waitForGoogleCombo(timeout = 12000) {
    return new Promise((resolve) => {
      const started = Date.now();
      const timer = window.setInterval(() => {
        const combo = doc.querySelector('.goog-te-combo');
        if (combo) {
          window.clearInterval(timer);
          resolve(combo);
        } else if (Date.now() - started > timeout) {
          window.clearInterval(timer);
          resolve(null);
        }
      }, 120);
    });
  }

  function loadGoogleWidget() {
    if (googleWidgetPromise) return googleWidgetPromise;
    googleWidgetPromise = new Promise((resolve, reject) => {
      const container = doc.getElementById('google_translate_element');
      if (!container) {
        reject(new Error('Missing Google Translate container'));
        return;
      }
      const included = Array.from(new Set(
        $$('[data-lgc-google]').map((button) => button.getAttribute('data-lgc-google')).filter(Boolean)
      ));
      const guard = window.setTimeout(() => reject(new Error('Google Translate load timeout')), 10000);

      window.googleTranslateElementInit = function googleTranslateElementInit() {
        window.clearTimeout(guard);
        try {
          new window.google.translate.TranslateElement({
            pageLanguage: googlePageLanguage(),
            includedLanguages: included.join(','),
            autoDisplay: false,
          }, 'google_translate_element');
        } catch (error) {
          reject(error);
          return;
        }
        waitForGoogleCombo().then((combo) => {
          if (combo) resolve(combo);
          else reject(new Error('Google Translate combo not ready'));
        });
      };

      if (window.google && window.google.translate) {
        window.googleTranslateElementInit();
        return;
      }

      const script = doc.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onerror = () => {
        window.clearTimeout(guard);
        reject(new Error('Google Translate script failed to load'));
      };
      doc.head.appendChild(script);
    });
    return googleWidgetPromise;
  }

  function keepBodyTop() {
    if (doc.body) {
      doc.body.style.setProperty('top', '0px', 'important');
      doc.body.style.setProperty('margin-top', '0px', 'important');
    }
  }

  function hideGoogleChrome() {
    doc.querySelectorAll('iframe.skiptranslate, .goog-te-banner-frame, .goog-te-menu-frame, #goog-gt-tt, .goog-te-spinner-pos').forEach((element) => {
      element.style.setProperty('display', 'none', 'important');
    });
    keepBodyTop();
  }

  let googleLanguageRequest = 0;

  function applyGoogleLanguage(code) {
    const requestId = ++googleLanguageRequest;
    let attempts = 0;
    const tick = () => {
      if (requestId !== googleLanguageRequest) return;
      const combo = doc.querySelector('.goog-te-combo');
      if (combo) {
        combo.value = code;
        combo.dispatchEvent(new Event('change', { bubbles: true }));
      }
      attempts += 1;
      if (attempts < 10) window.setTimeout(tick, 600);
    };
    window.setTimeout(tick, 500);
  }

  function setLanguageLabel(name) {
    const label = $('.lgc-translate-label');
    if (label && name) label.textContent = name;
  }

  function markActiveLanguage(button) {
    const widget = $('[data-lgc-translate]');
    if (!widget) return;
    $$('.lgc-lang-active', widget).forEach((element) => element.classList.remove('lgc-lang-active'));
    if (button) button.classList.add('lgc-lang-active');
  }

  function googleTranslatePage(code, button) {
    if (!code) return;
    if (button) button.classList.add('is-loading');
    loadGoogleWidget()
      .then(() => {
        const languageName = button ? button.getAttribute('data-lgc-label') : '';
        if (languageName) setLanguageLabel(languageName);
        markActiveLanguage(button);
        applyGoogleLanguage(code);
        hideGoogleChrome();
        let ticks = 0;
        const timer = window.setInterval(() => {
          hideGoogleChrome();
          ticks += 1;
          if (ticks >= 60) window.clearInterval(timer);
        }, 250);
      })
      .catch((error) => {
        googleWidgetPromise = null;
        console.warn('[google-translate]', error);
      })
      .finally(() => {
        if (button) window.setTimeout(() => button.classList.remove('is-loading'), 800);
      });
  }

  /* ------------------------------------------------------------------------
     Navigation + miscellaneous
     ---------------------------------------------------------------------- */

  function initNavigation() {
    const checkbox = $('#nav-toggle');
    const label = doc.querySelector('label[for="nav-toggle"]');
    if (checkbox && label) {
      const sync = () => label.setAttribute('aria-expanded', checkbox.checked ? 'true' : 'false');
      checkbox.addEventListener('change', sync);
      sync();
      label.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          checkbox.checked = !checkbox.checked;
          sync();
        }
      });
    }

    $$('#nav-menu a').forEach((link) => {
      link.addEventListener('click', () => {
        if (checkbox && window.innerWidth < 1024) {
          checkbox.checked = false;
          if (label) label.setAttribute('aria-expanded', 'false');
        }
      });
    });

    const header = $('.page-header');
    if (header) {
      const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    $$('a[target="_blank"]').forEach((link) => {
      const rel = (link.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
      if (!rel.includes('noopener')) rel.push('noopener');
      if (!rel.includes('noreferrer')) rel.push('noreferrer');
      link.setAttribute('rel', rel.join(' '));
    });
  }

  function init() {
    bindCopyButtons();
    initNavigation();
    initLanguagePanel();
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
