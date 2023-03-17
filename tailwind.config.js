/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html}", "./src/**/*.{vue, js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkGray: '#343434',
        lightGray: '#D3D3D3',
        lightBlue: '#7BCEF7'
      }
    },
  },
  plugins: [],
}
