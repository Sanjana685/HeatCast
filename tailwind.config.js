/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        heat: { DEFAULT: "#ea580c", soft: "#fff1e6" },
        veg: { DEFAULT: "#16a34a", soft: "#e8f6ec" },
        atmos: { DEFAULT: "#4f46e5", soft: "#eceafd" },
        status: {
          done: "#16a34a",
          progress: "#d97706",
          planned: "#6b7280",
        },
        ink: {
          900: "#0f172a",
          700: "#334155",
          500: "#64748b",
          300: "#cbd5e1",
          100: "#f1f5f9",
          50: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};
