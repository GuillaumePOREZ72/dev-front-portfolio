/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: {
          light: "#00FFFF",
          dark: "#87CEFA",
        },
        tertiary: {
          light: "#87CEFA",
          dark: "#00FFFF",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "gradient-light":
          "linear-gradient(to bottom right, #F0FFFF, #E6F7FF, #D9F2FF)",
        "gradient-dark":
          "linear-gradient(to bottom right, #0D0D0D, #1A1A1A, #262626)",
      },
    },
  },
  plugins: [],
};
