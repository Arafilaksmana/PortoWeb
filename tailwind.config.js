/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
    theme: {
      extend: {
        fontFamily: {
            Regular: ['Regular', 'sans-serif'],
            Medium: ['Medium', 'sans-serif'],
            Light: ['Light', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  