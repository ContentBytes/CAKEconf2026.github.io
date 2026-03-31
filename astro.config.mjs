import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://CAKEconf2026.github.io',
  integrations: [sitemap()],
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Space Grotesk",
    cssVariable: "--font-space-grotesk",
  }]
});
