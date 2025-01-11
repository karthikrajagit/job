const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Adjust as per your project
  theme: {
    extend: {
      animation: {
        "slide-in": "slideIn 1s ease-out",
        "bounce-in": "bounceIn 1.2s ease-out",
        "fade-in": "fadeIn 1.5s ease-in",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "60%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "2" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".delay-300": {
          animationDelay: "0.3s",
        },
      });
    }),
  ],
};
