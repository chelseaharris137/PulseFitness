/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F6FFF8",
        "gray-50": "#EBFFEF",
        "gray-100": "#CCDCCF",
        "gray-500": "#2B3B34",
        "primary-100": "#FAFFFB",
        "primary-300": "#CCE3DE",
        "primary-500": "#A4C3B2",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowgreen":
          "linear-gradient(90deg, #2B3B34 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/images/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        pulsebackground: "url('./assets/images/PulseBackground.png')",
        abstractwaves: "url('./assets/images/AbstractWaves.png')",
        sparkles: "url('./assets/images/Sparkles.png')",
        circles: "url('./assets/images/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
