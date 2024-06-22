import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Scalelight",
      logo: {
        src: "./src/assets/logo.svg",
        alt: "Scalelight",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      components: {
        Hero: "./src/components/Hero.astro",
        Header: "./src/components/Header.astro",
        PageFrame: "./src/components/PageFrame.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
      },
      customCss: [
        "./src/tailwind.css",
        "@fontsource/ibm-plex-sans/400.css",
        "@fontsource/ibm-plex-sans/600.css",
        "@fontsource/inter/300.css",
        "@fontsource/inter/400.css",
        "@fontsource/inter/600.css",
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
