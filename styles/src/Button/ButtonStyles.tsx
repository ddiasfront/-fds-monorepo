import { css } from "@stitches/core";

export const ButtonCSS = css({
  cursor: "pointer",
  px: "$3",
  border: "1.25px solid $blue500",
  borderRadius: "$rl",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "Work Sans",
  transition: "all 0.5s ease",

  variants: {
    variant: {
      default: {
        backgroundColor: "$blue600",
        color: "$white100",

        "&:hover": {
          backgroundColor: "$blue500",
        },
      },
      green: {
        backgroundColor: "$green500",
        borderColor: "$green800",
        color: "$white100",

        "&:hover": {
          backgroundColor: "$green800",
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
        color: "$green500",
        borderColor: "$green500",

        "&:hover": {
          color: "$white100",
          backgroundColor: "$green800",
        },
      },
    },
  ],
});
