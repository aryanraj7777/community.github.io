module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700_3f: "#ffffff3f", A700: "#ffffff" },
        blue_gray: {
          100: "#d9d9d9",
          900: "#151a4f",
          "100_84": "#d9d9d984",
          "100_63": "#d9d9d963",
        },
        pink: { 900: "#793030" },
        blue: { 100: "#d0e1ff", A100: "#81aef2", A200: "#428dfc" },
        deep_orange: { 100: "#f2baba", "100_01": "#feb4b4" },
        indigo: {
          900: "#23286b",
          "900_51": "#23286b51",
          "900_56": "#23286b56",
        },
        black: { 900: "#000000", "900_72": "#00000072" },
      },
      fontFamily: {
        hammersmithone: "Hammersmith One",
        inter: "Inter",
        helvetica: "Helvetica",
        almarai: "Almarai",
        inika: "Inika",
      },
      boxShadow: {
        bs: "0px 4px  39px 0px #ffffff3f",
        bs1: "5px 8px  8px 0px #00000072",
      },
      backgroundImage: { gradient: "linear-gradient(266deg ,#d0e1ff,#428dfc)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
