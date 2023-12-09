/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-black": "#0F0F0F",
        "dark-main-black": "#181823",
        "dark-second-black": "#2F2E41",
        "dark-hover-black": "#232235",

        "main-white": "#FFFAFA",

        "main-blue": "#4477CE",
        "dark-main-blue": "#0944A8",
      },
      minHeight: {
        28: "7rem",
      },
      screens: {
        xsm: "400px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
