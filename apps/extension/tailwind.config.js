/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    borderRadius: {
      common: '23px', // Add the common border radius of 23px
      sm: '0.125rem', // 2pxm
      default: '0.25rem', // 4px
      md: '0.375rem', // 6px
      lg: '0.5rem', // 8px
      xl: '0.75rem', // 12px
      '2xl': '1rem' // 16px
    },
    colors: {
      grey1: '#282828',
      grey2: '#181818',
      light_grey: '#86868B',
      purple: '#5b21b6',
      purpledark: '#3730a3',
      black: 'black',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      'charcol-gray': '#36454F',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      'off-white': '#f7f8f8',
      'transparent-white': 'rgba(255, 255, 255, 0.08)',
      background: '#000212',
      grey: '#858699',
      'grey-dark': '#222326',
      'primary-text': '#b4bcd0',
      indigo: '#663FD6',
      green: '#22c55e',
      red: '#be123c',
      // calendar cards color
      'orange-card': '#E5B976',
      'red-card': '#CB9DA3',
      darkorange: '#66461B',
      darkred: '#5C2429'
    },
    extend: {}
  },
  plugins: []
}
