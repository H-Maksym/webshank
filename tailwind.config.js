/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,html,css}"],

  // content: [
  //   './src/pages/**/*.{js,ts,jsx,tsx}',
  //   './src/components/**/*.{js,ts,jsx,tsx}',
  //   './src/app/**/*.{js,ts,jsx,tsx}',
  // ],

  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 480px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1366px",
      // => @media (min-width: 1366px) { ... }
      "3xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },

    fontFamily: {},

    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "3.5rem",
    },

    // colors: {},

    // fontFamily: {},

    extend: {
      animation: {
        text: "text 5s ease-in-out infinite",
        text2: "text2 5s ease-in-out infinite",
        ldsSpinner: "ldsSpinner 1.2s ease-in-out infinite",
      },
      //INFO rename animation
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },

        text2: {
          "0%, 100%": {
            "background-size": "200% auto",
            "background-position": "0 center",
          },
          "50%": {
            "background-size": "200% auto",
            "background-position": "200% center",
          },
        },

        ldsSpinner: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },

      flex: {
        2: "1 0 auto",
        3: "0 0 auto",
      },
      // spacing: {},
      backgroundImage: {},
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [
    //INFO Custom tailwind class animation-delay-[value]
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        "animation-delay": (value) => {
          return {
            animationDelay: value,
          };
        },
      });
    }),
    //INFO Custom tailwind class bg-gradient with angle-[value]
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme("bgGradientDeg", {}), // name of config key. Must be unique
            {
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              120: "120deg",
              135: "135deg",
            }
          ),
        }
      );
    }),
  ],
};
