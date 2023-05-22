/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      '150': '150px',
    },
    maxWidth:{
      '300': '300px'
    },
    extend: {
      fontFamily:{
        alice: ['Alice', 'serif'],
        patrick: ['Patrick Hand', 'cursive'],
      },
      colors: {
        primary: '#F2B8B9',
        secondary: {
          100:'#576CDD',
          200:'#EEA173',
          300: '#F9D66E',
          400: '#76C8B2',
          500: '#9D82D1',
        }
    },
    backgroundImage: {
      clouds: 'url("/src/assets/svg/cloudy.svg")'
    }
  },
  plugins: [],
}
}