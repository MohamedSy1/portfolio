/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
          primary: "#1a1a1a",
          "primary-content": "#999999",
          "primary-dark": "#000000",
          "primary-light": "#333333",

          secondary: "#1a1a1a",
          "secondary-content": "#999999",
          "secondary-dark": "#000000",
          "secondary-light": "#333333",

          background: "#1a1a1a",
          foreground: "#262626",
          border: "#404040",

          copy: "#fbfbfb",
          "copy-light": "#d9d9d9",
          "copy-lighter": "#a6a6a6",

          success: "#1a1a1a",
          warning: "#1a1a1a",
          error: "#1a1a1a",

          "success-content": "#999999",
          "warning-content": "#999999",
          "error-content": "#999999"
      },
      screens: {
        '1380': '1380px',
      },
    },
  },
  plugins: [],
};
