/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      spacing: {
        'vw': '1vw',
        'vh': '1vh',
      },
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        'pc': "url('https://api.dujin.org/bing/1920.php')",
        'mp': "url('/img/footer-texture.png')",
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
