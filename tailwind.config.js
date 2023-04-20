/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      neutral: colors.neutral,
      gray: colors.gray,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
