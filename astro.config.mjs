import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://noramodeb.com',
  trailingSlash: 'ignore',
  output: 'static',

  build: {
    inlineStylesheets: 'auto',
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    responsiveStyles: true,
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  adapter: cloudflare()
});