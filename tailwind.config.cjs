/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
       
        primaryText: "#3D4F5C",
        primaryOrange: "#FB8958",
        bgSecondary: "#FBFAFA",
        actionColor: "#46B8C8",
        colorBgYellow: "#FFC351",
      
      },

      fontFamily: {
        circular: ['"Circular Std Bold"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
