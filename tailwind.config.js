/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: {
          light: "#0056b3",
          dark: "#87CEFA",
        },
        tertiary: {
          light: "#003366",
          dark: "#00FFFF",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "gradient-light": "linear-gradient(to bottom right, #ffffff, #d2f2ff)", // Changed to lighter blues
        "gradient-dark": "linear-gradient(to bottom right, #1a263d, #0f111b)",
      },
    },
  },
  plugins: [],
};
