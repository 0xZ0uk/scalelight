import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#d3a2d0",
  600: "#c88bc4",
  900: "#5c2c59",
  950: "#2e162c",
};
const gray = {
  100: "#f7fafc",
  200: "#f3eeee",
  300: "#cdcdcd",
  400: "#9b9b9b",
  500: "#6a6a6a",
  700: "#3a3a3a",
  800: "#2e2e2e",
  900: "#060606",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
      borderRadius: {
        lg: "0.8rem",
      },
    },
  },
  plugins: [starlightPlugin()],
};
