/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BEBAS: ["Bebas Neue", "sans-serif"],
        ROBOTO: ["Roboto", "sans-serif"],
        RALEWAY: ["Raleway", "sans-serif"],

      },
    },
  },
  plugins: [],
}