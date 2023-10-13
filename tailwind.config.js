/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //c stands for custom colors
        cRed: "#DB2B39",
        cBlue: "#29335C",
        cYellow: "#F3A712",
        cSkin: "#F0CEA0",
        cBrown: "#534D41",
      },
    },
  },
  plugins: [],
};
