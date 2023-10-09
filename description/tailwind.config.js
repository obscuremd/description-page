const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        logo:"url('./src/assets/logo.svg')",
        background:"url('./src/assets/insecure.png')"
      },

      colors:{
        primary:"#FFFFFF"
      }
    },
  },
  plugins: [],
})

