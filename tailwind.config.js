/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        lato: ["Lato", "sans-serif"], // Adding Manrope font
      },
      spacing: {
        "112px": "112px",
        "50px": "50px", // Adds a custom spacing value for 112px
      },
      backgroundImage: {
        customRadial:
          "radial-gradient( circle, rgba(251, 65, 86, 1) 0%, rgba(61, 61, 61, 0.5) 100%)",
        // Radial gradient
      },
      screens: {
        md: "834px",
        xl: "1420px",
        "2xl": "1920px", // Customizing the 2xl breakpoint to 1420px
      },
      backgroundColor: {
        primary: "#FB4156",
        primaryBlack: "#464646",
        primaryRed: "#FB4156",
        primaryGray: "#F4F6F9",
        primaryGray2: "#EDEDED",

        // Replace with your desired color (e.g., gray-100)
      },
      colors: {
        primaryGray: "#C0C0C0",
        primaryRed: "#FB4156",
        wordBlack: "#2C2C2C",
        worldBlack2: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
