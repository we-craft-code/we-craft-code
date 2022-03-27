const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      twitter: {
        100: '#1B95E0',
        200: '#0C7ABF'
      },
      discord: {
        100: '#6E85D2',
        200: '#374269'
      },
      reddit:{
        100:'#FF4500',
        200:'#BF3300'
      },
    }
  },
  plugins: [],
}
