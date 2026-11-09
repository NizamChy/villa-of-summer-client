import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1D4E67",
          dark: "#163C50",
        },
        page: "#E6EBF5",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translate(-10px, -10px)" },
          "33%": { transform: "translate(10px, 10px)" },
          "66%": { transform: "translate(-10px, 10px)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "grow-in": {
          from: { opacity: "0", transform: "scaleX(0.4)" },
          to: { opacity: "1", transform: "scaleX(1)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 35s linear infinite",
        float: "float 6s ease-in-out infinite alternate",
        "fade-in": "fade-in 0.6s ease-out both",
        "grow-in": "grow-in 0.8s ease-out both",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
