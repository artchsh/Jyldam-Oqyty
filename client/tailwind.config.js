/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue}",
            "./src/**/**/*.{html,vue}",],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
