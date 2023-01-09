import { css } from "@stitches/core";

export const ButtonCSS = css({
  border: "none",
  cursor: "pointer",
  px: "$3",
  borderRadius: "$rsm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "Work Sans",
  transition: "all 0.5s ease",

  variants: {
    variant: {
      default: {
        backgroundColor: "$blue8",
        color: "$blue12",
        "&:hover": {
          backgroundColor: "$blue9",
        },
      },
      mint: {
        backgroundColor: "$mint4",
        color: "$mint11",
        "&:hover": {
          backgroundColor: "$mint5",
        },
        "&:active": {
          backgroundColor: "$mint4",
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
      variant: "mint",
      outlined: true,
      css: {
        border: "1px solid $mint8",
        color: "$mint11",
        borderColor: "$mint8",

        "&:hover": {
          color: "$outlineMint12",
          backgroundColor: "$mint10",
        },
      },
    },
  ],
});
