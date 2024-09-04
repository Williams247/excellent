/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['sans-serif'],
      },
      colors: {
        primary: {
          100: "#84edd0",
          200: "#1cac88",
          300: "#016156"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
