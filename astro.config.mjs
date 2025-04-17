import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import flexokiDark from "./src/flexokiDark.json"

// https://astro.build/config
export default defineConfig({
  site: "https://castro.eus",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: { theme: flexokiDark },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "eu"],
  },
  output: "static",
});
