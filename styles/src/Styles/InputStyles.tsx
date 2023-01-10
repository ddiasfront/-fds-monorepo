import { css } from "@stitches/core";

export const InputCSS = css({
  all: "unset",
  fontSize: "$sm",
  padding: "$2",
  color: "$blue12",
  transition: "all ease 0.2",
  borderRadius: "$rsmx",
  backgroundColor: "$blackA2",
  boxShadow: "0 0 0 1px $blue6",
  "&:focus": {
    boxShadow: "0 0 0 2px $blue7",
  },

  variants: {
    variant: {
      mint: {
        color: "$mint12",
        boxShadow: "0 0 0 1px $mint6",
        "&:focus": {
          boxShadow: "0 0 0 2px $mint7",
        },
      },
      default: {},
    },
  },
});
