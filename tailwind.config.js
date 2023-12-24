/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main-black': '#0F0F0F',
        'dark-main-black': '#181823',
        'dark-second-black': '#2F2E41',
        'dark-hover-black': '#232235',
        'github-dark': '#2B3137',

        'main-white': '#FFFAFA',

        'main-blue': '#4477CE',
        'main-blue-hover': '#2061CF',
        'dark-main-blue': '#0944A8',
      },
      minHeight: {
        28: '7rem',
      },
      screens: {
        xsm: '400px',
        'bp-550px': '550px',
        xmd: '625px',
      },
      boxShadow: {
        'black-shadow': '1px 1px 5px rgba(0, 0, 0, 0.5)',
        'white-shadow': '0.5px 0.5px 5px rgba(255, 255, 255, 0.26)',
      },
    },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
