/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      abrilFatfaceRegular: ['"Abril Fatface"', '"serif"'],
      montserrat: ['"Montserrat"', '"sans-serif "'],
    },
  },
  plugins: [],
};
