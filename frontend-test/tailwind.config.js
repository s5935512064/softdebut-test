module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "426px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
