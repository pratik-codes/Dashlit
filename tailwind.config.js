/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      grey1: "#282828",
      grey2: "#181818",
      purple: "#5b21b6",
      purpledark: "#3730a3",
      black: "black",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "charcol-gray": "#36454F",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "off-white": "#f7f8f8",
      "transparent-white": "rgba(255, 255, 255, 0.08)",
      background: "#000212",
      grey: "#858699",
      "grey-dark": "#222326",
      "primary-text": "#b4bcd0",
      indigo: "#663FD6",
      green: "#22c55e",
      red: "#be123c"
    },
    extend: {}
  },
  plugins: []
};
