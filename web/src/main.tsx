import { createStitches, globalCss, PropertyValue } from "@stitches/react";
import type * as StitchesTypes from "@stitches/react";
import { blueDark, green, violet, slate } from "@radix-ui/colors";

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
      ...blueDark,
      ...green,
      ...slate,
      ...violet,
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
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
  },
});

export { StitchesTypes };
