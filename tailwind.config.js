/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./utils/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF8DC',
          100: '#FFEDB3',
          200: '#FFE066',
          300: '#FFD700',
          400: '#D4AF37',
          500: '#B8860B',
        },
        black: {
          900: '#000000',
          800: '#1A1A1A',
          700: '#2D2D2D',
          600: '#404040',
        }
      }
    },
  },
  plugins: [],
}
