import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [sitemap()],
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Space Grotesk",
    cssVariable: "--font-space-grotesk",
  }]
});
