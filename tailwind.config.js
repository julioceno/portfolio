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
        'bp-400px': '400px',
        'bp-550px': '550px',
        'pb-625px': '625px',
      },
      boxShadow: {
        'black-shadow': '1px 1px 5px rgba(0, 0, 0, 0.5)',
        'white-shadow': '0.5px 0.5px 5px rgba(255, 255, 255, 0.26)',
      },
      backgroundImage: {
        sun: "url('./public/sun.svg')",
        moon: "url('./public/moon.svg')",
      },
      backgroundPosition: {
        'left-0.4': 'center left .4rem',
        'right-0.4': 'center right .4rem',
      },
      backgroundSize: {
        1.2: '1.2rem',
        1.5: '1.5rem',
      },
    },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
