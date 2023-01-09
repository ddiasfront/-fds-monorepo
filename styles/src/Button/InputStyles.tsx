import { css } from "@stitches/core";

export const InputCSS = css({
  transition: "all ease 0.2",
  border: "1.25px solid $blue10",
  borderRadius: "$rsmx",
  backgroundColor: "$blackA1",
  "&:focus": {
    outline: "1.25px solid $blue10",
  },
  variants: {
    green: {},
    default: {},
  },
});
