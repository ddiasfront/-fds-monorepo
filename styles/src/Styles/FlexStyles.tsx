import { css } from "@stitches/core";

export const FlexCSS = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    variant: {
      default: {},
      "space-between": {
        true: {
          justifyContent: "space-between",
        },
      },
      "space-around": {
        true: {
          justifyContent: "space-around",
        },
      },
      mint: {
        color: "$mint12",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
  compoundVariants: [],
});
