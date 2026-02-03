// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
        display: ["Corinthia", "serif"]
      },
      fontSize: {
        "body-sm": ["var(--fs-body-sm)", { lineHeight: "var(--lh-normal)" }],
        body: ["var(--fs-body)", { lineHeight: "var(--lh-relaxed)" }],
        "body-lg": ["var(--fs-body-lg)", { lineHeight: "var(--lh-relaxed)" }],

        "h-sm": ["var(--fs-h-sm)", { lineHeight: "var(--lh-snug)" }],
        "h-md": ["var(--fs-h-md)", { lineHeight: "var(--lh-snug)" }],
        "h-lg": ["var(--fs-h-lg)", { lineHeight: "var(--lh-tight)" }],

        "display-sm": ["var(--fs-display-sm)", { lineHeight: "var(--lh-tight)" }],
        "display-md": ["var(--fs-display-md)", { lineHeight: "var(--lh-tight)" }],
        "display-lg": ["var(--fs-display-lg)", { lineHeight: "var(--lh-tight)" }],
      },
      letterSpacing: {
        widest: ".25em"
      },
      colors: {
        palladian: "#EEE9DF",
        abyssal: "#1B2632"
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }
    }
  },
  plugins: []
}

export default config