/** @type {import('tailwindcss').Config} */
const colors = "tailwindcss/colors";

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-gray": colors.blueGray,
      },
    },
    minWidth: {
      50: "150px",
    },
  },
  plugins: [],
};
