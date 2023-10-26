/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'andika': ['Andika', 'sans-serif'],
      'opensans': ["'Open Sans'", 'sans-serif'],
    },
    utitlities:{
      '.box':{
        margin:'0 auto',
        width : '90%'
      },
      '.group-2-input':{
        "tvt":'lg:flex sm:flex gap-0 lg:gap-4 grid sm:gap-4'

      },
    },
    extend: {}
  },
  daisyui: {
    themes: ["winter"],
  },
  plugins: [require("daisyui")],
}
