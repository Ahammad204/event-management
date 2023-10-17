/** @type {import('tailwindcss').Config} */
const customTheme = require('./customTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],
     daisyui: {
      themes: [
        'light', 
        customTheme, 
      ],
    },
  theme: {
    extend: {
     fontFamily:{

      outfit:"'Outfit', sans-serif",
      teko:"'Teko', sans-serif"

     }
    },
  },
  plugins: [require("daisyui")],
}

