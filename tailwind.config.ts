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
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideFadeRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideFadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 1s ease-out forwards',
        'slide-fade-right': 'slideFadeRight 1s ease-out forwards',
        'slide-fade-left': 'slideFadeLeft 1s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards'
      },
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