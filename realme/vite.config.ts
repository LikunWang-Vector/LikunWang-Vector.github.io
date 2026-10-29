import { defineConfig } from 'vite';

// The page is published under https://likunwang-vector.github.io/realme/,
// so every asset URL needs that prefix in production. In dev, Vite serves the
// same prefix, which keeps absolute URLs in the markup working both ways.
export default defineConfig({
  base: '/realme/',
  // Articles are rendered by REALME itself (scripts/build-content.mjs writes
  // public/content/). The proxy only covers images and links that still point
  // at the academic site, which Hugo serves on :1313 during development.
  server: {
    proxy: {
      '/post': 'http://127.0.0.1:1313',
      '/csdn': 'http://127.0.0.1:1313',
      '/publication': 'http://127.0.0.1:1313',
      '/project': 'http://127.0.0.1:1313',
      '/media': 'http://127.0.0.1:1313',
      '/images': 'http://127.0.0.1:1313',
    },
  },
  build: {
    target: 'es2020',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          gsap: ['gsap'],
        },
      },
    },
  },
});
