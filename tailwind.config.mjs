/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070304",
        cream: {
          DEFAULT: "#F2EDE4",
          fade: "rgba(242,237,228,0.6)",
          ghost: "rgba(242,237,228,0.12)",
          dim: "rgba(242,237,228,0.04)",
        },
        vermillion: {
          DEFAULT: "#FF4401",
          fade: "rgba(255,68,1,0.15)",
          glow: "rgba(255,68,1,0.03)",
          border: "rgba(255,68,1,0.3)",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        script: ["'Pinyon Script'", "cursive"],
        brand: ["'Playfair Display'", "serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1.4" }],
        xs: ["0.6875rem", { lineHeight: "1.4" }],
        sm: ["0.75rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        hero: ["clamp(5rem, 14vw, 12.5rem)", { lineHeight: "0.9" }],
        "section-title": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1" }],
        "project-title": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1" }],
        "cta-title": ["clamp(4rem, 10vw, 8.75rem)", { lineHeight: "0.95" }],
      },
      letterSpacing: {
        tight: "-0.02em",
        snug: "-0.01em",
        wide: "0.05em",
        wider: "0.08em",
        widest: "0.15em",
        mono: "0.1em",
        caps: "0.2em",
        mega: "0.25em",
      },
      maxWidth: {
        site: "1300px",
        text: "680px",
        cta: "420px",
        narrow: "900px",
      },
      spacing: {
        18: "72px",
        22: "88px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
