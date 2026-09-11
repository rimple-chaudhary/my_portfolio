/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--bg)",
        "ink-raised": "var(--bg-raised)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        award: "var(--award)",
        body: "var(--text)",
        muted: "var(--text-muted)",
        hairline: "var(--border-subtle)",
      },
      borderRadius: {
        card: "var(--radius)",
      },
      maxWidth: {
        shell: "72rem",
      },
    },
  },
  plugins: [],
};
