import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "Arial", "sans-serif"],
        tt_travels: "var(--font-tt_travels)",
        jmhtypewriter: "var(--font-jmhtypewriter)",
        stamped: "var(--font-stamped)",
        helveticacompressed: "var(--font-helveticacompressed)",
      },
      fontSize: {
        "404": "15rem",
        "text-xxs": "0.6rem",
      },
      width: {
        folder: "30.5rem",
      },
      compilerOptions: {
        typeRoots: ["./node_modules/@types", "./src/types"],
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
        typewriter: "typewriter 1s steps(3) forwards",
        caret: "typewriter 1s steps(3) forwards, blink 1s steps(3) infinite 1s",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        drop: {
          "0%": {
            transform: "translateY(0) scaleX(.85) rotate(45deg)",
            animationTimingFunction: "ease-out",
          },
          "60%": {
            transform: "translateY(120%) scaleX(.85) rotate(45deg)",
            animationTimingFunction: "ease-in",
          },
          "80%": {
            transform: "translateY(60vh) scaleX(.85) rotate(45deg)",
          },
          "100%": {
            transform: "translateY(60vh) scaleX(.85) rotate(45deg)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
