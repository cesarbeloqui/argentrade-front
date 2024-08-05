/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import animations from "@midudev/tailwind-animations";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      primary: "#F2F2F2",
      secondary: "#03006D",
      azul: "#1B1464",
      naranja: "#F29100",
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        100: "#F2F2F2",
        200: "#E5E5E5",
        300: "#D9D9D9",
        400: "#CCCCCC",
        500: "#BFBFBF",
        600: "#B3B3B3",
        700: "#A6A6A6",
        800: "#999999",
        900: "#8C8C8C",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
    extend: {
      backgroundImage: {
        "hero-1": "url('/src/assets/head1.png')",
      },
    },
  },
  plugins: [forms, animations],
};
