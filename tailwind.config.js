/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
    extend: {
      screens: {
        xxs: "320px",
        xs: "480px",
        xl: "1200px",
        "2xl": "1366px",
        "3xl": "1440px",
        "4xl": "1536px",
      },
      colors: {
        blue: "#0096ff",
        "blue-dark": "#1434a4",
        gray: "#565969",
      },
    },
  },
  plugins: [],
};
