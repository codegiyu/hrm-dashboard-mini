/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["'Kanit'", "sans-serif"],
      },
      colors: {
        blue: "#377DFF",
        grey: "#C4C4C4",
        primary: "#333333"
      }
    },
  },
  plugins: [],
}

