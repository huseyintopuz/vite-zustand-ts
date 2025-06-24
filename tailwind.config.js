/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0077cc",
        secondary: "#6c757d",
        success: "#28a745",
      },
    },
  },
  plugins: [],
};
