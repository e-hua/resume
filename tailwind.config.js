/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extended with a class called container
      container: {
        center: true,
        padding: "15px",
      },
      // define different kind of screens
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      colors: {
        primary: "var(--primary)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover, var(--accent))", // fallback if no hover var
        },
      },
    },
  },
  plugins: [],
};
