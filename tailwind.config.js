/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      impact: ["impact"],
        segoe: ["Segoe UI", "impact"],
        italic: ["Segoe UI Italic", "sans-serif"],
    }
  },
  plugins: [],
}