/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        neon: "rgb(var(--neon) / <alpha-value>)",
        dim: "rgb(var(--dim) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
