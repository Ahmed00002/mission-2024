/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Yeseva One", "serif"],
        poppin: ["Poppins", "sans-serif"],
        footer_title: ["Lobster", "sans-serif"],
      },
      colors: {
        primary: ["#FF5959"],
        secondary: ["#FFAD5A"],
        mission1: ["rgba(79, 157, 166, 0.1)"],
        mission2: ["rgba(255, 89, 89, 0.1)"],
        mission3: "#FFF4D6",
      },
    },
  },
  plugins: [],
};
