import { css } from "@stitches/core";

export const ButtonCSS = css({
  border: "none",
  cursor: "pointer",
  px: "$3",
  borderRadius: "$rsm",
  fontSize: "$xs",
  fontWeight: "$medium",
  // fontFamily: "$work",
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
        fontSize: "$md",
      },
      2: {
        px: "$3",
        py: "$3",
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
          color: "$defaulOutlinedtText",
          backgroundColor: "$mint10",
        },
      },
    },
  ],
});
