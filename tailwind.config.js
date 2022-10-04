/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  },
  plugins: [],
}
