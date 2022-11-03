/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/*.{jsx,js}",
    "./src/components/**/*.{jsx,js}",
    "./src/pages/*.{jsx,js}",
    "./src/pages/**/*.{jsx,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
