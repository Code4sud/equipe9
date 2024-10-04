/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#E8FFCB',
        'custom-green-dark': '#C2E6B4',
      },
    },
  },
  plugins: [],
}

