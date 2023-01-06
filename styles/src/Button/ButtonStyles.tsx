import { css } from "@stitches/core";

export const ButtonCSS = css({
  cursor: "pointer",
  px: "$3",
  border: "1.25px solid $blue10",
  borderRadius: "$rl",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "Work Sans",
  transition: "all 0.5s ease",

  variants: {
    variant: {
      default: {
        backgroundColor: "$blue11",
        color: "$blue12",
        "&:hover": {
          backgroundColor: "$blue5",
        },
      },
      green: {
        backgroundColor: "$green3",
        borderColor: "$green6",
        color: "$green11",
        "&:hover": {
          backgroundColor: "$green4",
        },
      },
    },
    outlined: {
      true: {
        backgroundColor: "transparent",
      },
    },

    size: {
      1: {
        height: 25,
        fontSize: "$md",
      },
      2: {
        height: 55,
        fontSize: "$lg",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: 1,
  },
  compoundVariants: [
    {
      variant: "green",
      outlined: true,
      css: {
        color: "$green11",
        borderColor: "$green8",

        "&:hover": {
          color: "$green1",
          backgroundColor: "$green8",
        },
      },
    },
  ],
});
