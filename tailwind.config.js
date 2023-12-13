const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

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
        gray: {
          50: "#f9fafb",
          100: "#f0f2f5",
          200: "#e5e7eb",
          600: "#6b7280",
          900: "#111827",
        },
        blue_gray: {
          100: "#c9cfd5",
          400: "#7b809a",
          800: "#374151",
          "100_01": "#c9cfd6",
        },
        red: { 600: "#ec3d3d" },
        black: { 900: "#000000", "900_26": "#00000026" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 5px  10px 0px #00000026" },
      fontFamily: { monasans: "Mona Sans", inter: "Inter", roboto: "Roboto" },
      textShadow: { ts: "0px 5px  10px #00000026" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
