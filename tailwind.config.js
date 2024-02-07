/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(193, 38%, 86%)",
        button: "hsl(150, 100%, 66%)",
        main: "hsl(218, 23%, 16%)",
        box: "hsl(217, 19%, 38%)",
      },
    },
  },
  plugins: [],
};
