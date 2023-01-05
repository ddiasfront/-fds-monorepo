import { createStitches, globalCss, PropertyValue } from "@stitches/react";

export const globalStyles = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')",
  ],
  "@font-face": [
    {
      fontFamily: "Work Sans",
      src: "url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')",
    },
  ],
});

export const {
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray100: "hsl(206,10%,95%)",
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      blue600: "hsl(206,100%,65%)",
      purple500: "hsl(252,78%,60%)",
      green800: "hsl(148,60%,35%)",
      green500: "hsl(148,60%,40%)",
      green100: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
      white100: "#fff",
    },
    space: {
      px: "1px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
    },
    fontSizes: {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
    fonts: {
      work: "Work Sans, sans-serif",
    },
    fontWeights: {
      thin: "100",
      medium: "400",
      bold: "800",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      rxl: "50px",
      rl: "20px",
      rsm: "10px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },

  utils: {
    px: (value: unknown) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
  },
});

// import { ButtonCSS } from "./Button/ButtonStyles";

// export { ButtonCSS };
