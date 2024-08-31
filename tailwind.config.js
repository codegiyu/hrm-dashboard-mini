/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 26px 0px #6F6F721F',
      },
      colors: {
        'custom-gray': 'rgba(240, 240, 240, 1)',
      },
      fontFamily: {
        kanit: ["'Kanit'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}

