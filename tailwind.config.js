/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      serif: ["IBM Plex Sans", ...defaultTheme.fontFamily.serif],
      mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
