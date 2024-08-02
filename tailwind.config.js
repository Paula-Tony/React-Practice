/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightBlue: "#2c3e50",
        caribbeanGreen: "#1abc9c",
      },
    },
  },
  plugins: [],
};
