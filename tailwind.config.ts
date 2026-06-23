import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#07111f",
          900: "#0b1628",
          800: "#13243a",
        },
        accent: {
          blue: "#2563eb",
          violet: "#7c3aed",
        },
      },
      boxShadow: {
        premium: "0 24px 70px rgba(15, 23, 42, 0.14)",
        "premium-dark": "0 24px 70px rgba(0, 0, 0, 0.34)",
      },
    },
  },
  plugins: [],
} satisfies Config;
