/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#7c3aed",
          secondary: "#3b82f6",
          accent: "#22c55e",
          neutral: "#1E1A29",
          "base-100": "#05332b",
          "base-200": "#052c25",
          "base-content": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        light: {
          primary: "#7c3aed",
          secondary: "#3b82f6",
          accent: "#22c55e",
          neutral: "#ffffff",
          "base-100": "#f3f3f3",
          "base-200": "#eaeaea",
          "base-content": "#1f1f1f",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
    darkTheme: "dark",
  },
};
