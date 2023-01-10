import { css } from "@stitches/core";

export const LabelCSS = css({
  border: "none",
  fontSize: "$sm",
  color: "$blue12",
  variants: {
    variant: {
      default: {},
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
