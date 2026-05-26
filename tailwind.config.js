/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ek-primary": "#FFFFFF",
        "ek-bg": "#000000",
        "ek-card": "#121212",
        "ek-text": "#FFFFFF",
      },
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        blinkExclamation: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blinkExclamation: "blinkExclamation 1s steps(1, end) infinite",
      },
    },
  },
  plugins: [],
};
