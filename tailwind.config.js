/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Indie Flower", "cursive"],
      },
      colors: {
        primary: "#FEFAE5",
        secondary: "#DEBAA1",
        brandDark: "#A56546",
        button: "#D09468",
        buttonHover: "#E39E6B",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      boxShadow: {
        custom: "0 8px 10px -6px rgba(73, 44, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
