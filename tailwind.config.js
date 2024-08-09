/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import animations from "@midudev/tailwind-animations";
function textStrokeColor({ addUtilities, theme }) {
  const textStrokeValues = theme("textStroke");
  const colors = theme("colors");

  const textStrokeUtilities = Object.entries(textStrokeValues).reduce(
    (acc, [key, value]) => {
      Object.entries(colors).forEach(([colorName, colorValue]) => {
        acc[`.text-stroke-${key}-${colorName}`] = {
          "-webkit-text-stroke": `${value} ${colorValue}`,
          "text-stroke": `${value} ${colorValue}`, // Para navegadores compatibles
          color: "transparent",
        };
      });
      return acc;
    },
    {}
  );

  addUtilities(textStrokeUtilities, ["responsive", "hover"]);
}
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
        "china-section": "url('/src/assets/chinaSection.jpg')",
        mapa: "url('/src/assets/fondoMapa.png')",
      },
      fontFamily: {
        "pontiac-black": ["PontiacBlack", "sans-serif"],
        "pontiac-black-italic": ["PontiacBlackItalic", "sans-serif"],
        "pontiac-bold": ["PontiacBold", "sans-serif"],
        "pontiac-bold-italic": ["PontiacBoldItalic", "sans-serif"],
        "pontiac-light": ["PontiacLight", "sans-serif"],
        "pontiac-light-italic": ["PontiacLightItalic", "sans-serif"],
        "pontiac-regular": ["PontiacRegular", "sans-serif"],
        "pontiac-regular-italic": ["PontiacRegularItalic", "sans-serif"],
      },
      // Agregar valores arbitrarios personalizados
      textStroke: {
        default: "1px",
        1: "1px",
        2: "2px",
        4: "4px",
      },
    },
  },
  plugins: [forms, animations, textStrokeColor],
};
