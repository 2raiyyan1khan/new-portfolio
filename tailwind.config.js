// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#f9f8f6",
        secondary: "#ffffff",
        yellow: "#E9E57A",
        overLay: "rgba(0,0,0,0.5)",
      },
      visibility: ["group-hover"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
