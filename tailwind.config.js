/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-black": "#0F0F0F",
        "dark-main-black": "#181823",
        "dark-second-black": "#2F2E41",

        "main-white": "#FFFAFA",

        "main-blue": "#4477CE",
      },
    },
  },
  plugins: [],
};
