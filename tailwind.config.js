/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
        turquoise98: "rgb(245, 255, 255, 1)",
        turquoise90: "rgb(204, 255, 255, 1)",
        turquoise70: "rgb(104, 248, 253, 1)",
        turquoise30: "rgb(2, 146, 151, 1)",
        turquoise15: "rgb(1, 73, 75, 1)"
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

