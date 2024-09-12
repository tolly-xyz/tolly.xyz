import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "tokyo-night": {
          bg: "#1a1b26",
          fg: "#a9b1d6",
          accent1: "#bb9af7",
          accent2: "#7aa2f7",
          accent3: "#7dcfff",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["hover"],
      transform: ["hover"],
    },
  },
  plugins: [typography],
};
