/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily:{
        "Nohemi":"Nohemi",
        "General-Medium":"General Medium",
        "General-Semibold":"General Semibold",
      },
      colors:{
        "primary":"#1D3209",
        "secondary":"#79A450",
        "claro":"#EFFFDF",
        "hiddenText":"#B2CF94"
      },
    },
  },
  plugins: [],
};