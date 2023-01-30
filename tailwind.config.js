/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        'bb-show': '#00000050'
      }
    }
  },
  plugins: [],
}
