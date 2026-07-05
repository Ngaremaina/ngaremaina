/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        120: "30rem",
      },
      colors: {
        base: "#0F0F0F",
        surface: "#2D2E2E",
        sidebar: "#040b14",
        light: "#FBFBFB",
        muted: "#a8a9b4",
        accent: {
          DEFAULT: "#149ddd",
          hover: "#37b3ed",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Raleway", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
