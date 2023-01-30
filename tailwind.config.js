/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        'pc': "url('https://api.dujin.org/bing/1920.php')",
        'mp': "url('https://api.dujin.org/bing/m.php')",
      },
      colors: {
        'bb-show': '#00000050',
        'white': {
          '90': '#ffffff90',
          '70': '#ffffff70',
          '50': '#ffffff50'
        }
      }
    }
  },
  plugins: [],
}
