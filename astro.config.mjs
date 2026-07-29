import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eltrm.com',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      // Only canonical, indexable URLs — exclude alias pages and noindex pages
      filter: (page) => {
        const excluded = [
          // Legacy alias pages (Astro turns index-en.html into /index-en/ directory)
          /\/privacy\/index-en\//,
          /\/privacy\/index-de\//,
          /\/terms\/index-en\//,
          /\/terms\/index-de\//,
          /\/tr\/privacy\/index-en\//,
          /\/tr\/terms\/index-en\//,
          /\/tr\/privacy\/index-es\//,
          // Google verification files
          /google[0-9a-f]+/,
          // 404 page
          /\/404\//,
        ];
        return !excluded.some((pattern) => pattern.test(page));
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          tr: 'tr',
          de: 'de',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    // Don't add trailing slashes by default (Astro adds index.html)
    format: 'directory',
  },
  vite: {
    build: {
      // Analyze bundles by looking at dist/assets
      assetsInlineLimit: 0,
    },
  },
});
