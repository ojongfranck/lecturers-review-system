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
    extend: {},
  },
  daisyui: {
    themes: ["winter"],
  },
  plugins: [require("daisyui")],
}

