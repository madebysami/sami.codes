/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6366F1", // Indigo — your primary accent
          light: "#818CF8",
          dark: "#4F46E5",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#0F172A",
        },
        text: {
          primary: {
            light: "#1E293B",
            dark: "#F1F5F9",
          },
          secondary: {
            light: "#64748B",
            dark: "#94A3B8",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        heading: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "6rem",
      },
      borderRadius: {
        card: "0.75rem",
      },
    },
  },
  plugins: [],
};
