/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        buttonBlue: '#427cb6',
        buttonBlueHover: '#3c6fa1',
      },
      padding: {
        15: '60px'
      }
    },
  },
  plugins: [],
}

