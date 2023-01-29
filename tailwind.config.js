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
      backgroundImage: {
        'pc': "url('https://api.dujin.org/bing/1920.php')",
        'mp': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
}
