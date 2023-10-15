/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //c stands for custom colors
        white1: "#fafafa",
        white2: "#eaeaea",
        gray4: "#999",
        gray3: "#888",
        gray2: "#666",
        gray1: "#444",
        black2: "#333",
        black1: "#111",
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
