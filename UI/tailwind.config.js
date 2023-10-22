/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        raisin: {
          500: "#252131",
          600: "#17151F",
        },
        barn: {
          500: "#780000",
        }
      },
      borderWidth: {
        light: "0.3px"
      }
    },
  },
  plugins: [],
};
