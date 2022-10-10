/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {fontFamily: {
    "jakarta-sans": ["Plus Jakarta Sans"],
  },
  extend: {
    colors: {
      "color-brown" : "#9B8173",
      "color-white" : "#FFFFFF",
      "color-grey" : "#3B3B3B",
      "color-black" : "#040205",
      "color-aqua" : "#003B46",
      "bg-dark-custom" : "#1B2430",
    },
  },
  },
  plugins: [],
}
