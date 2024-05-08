/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customPurple:'#C384C8',
        customHover:'rgba(196,117,159,0.8)'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}