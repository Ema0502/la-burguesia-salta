/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#010409",
        secondary: "#ffe",
        tertiary: "#001030",
        "black-100": "#000d25",
        "black-200": "#000325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #001e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "contact-pattern": "url('/src/assets/contactbg.png')",
      },
    },
  },
  plugins: [],
};
