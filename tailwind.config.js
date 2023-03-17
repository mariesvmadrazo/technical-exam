/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html}", "./src/**/*.{vue, js}"],
  theme: {
    extend: {
      colors: {
        darkGray: '#343434',
        gray: '#606C68',
        lightGray: '#9A9A9A',
        lightBlue: '#427F8F',
        green: '#1CAB44',
        lightGreen: '#E3FEEE',
        orange: '#F88105',
        blue: '#1271CF'
      }
    },
  },
  plugins: [],
}
