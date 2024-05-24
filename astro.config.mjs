import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import flexokiDark from "./src/flexokiDark.json"

// https://astro.build/config
export default defineConfig({
  site: 'https://43hershel.github.io',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: { theme: flexokiDark },
  },
});