/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-xs': { 'max': '300px' },
        'max-sm': { 'max': '370px' },
        'max-md': { 'max': '472px' },
        'max-lg': { 'max': '774px' },
        'max-xl': { 'max': '991px' },
        'max-2xl': { 'max': '1080px' },
      },
    },
  },
  plugins: [
  ],
}