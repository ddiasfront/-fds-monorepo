import { css } from "@stitches/core";

export const ButtonCSS = css({
  cursor: "pointer",
  px: "$3",
  border: "1.25px solid $blue500",
  borderRadius: "$rl",
  fontSize: "$sm",
  fontWeight: "$thin",
  fontFamily: "Work Sans",
  backgroundColor: "$blue600",
  color: "$white100",
  transition: "all 0.5s ease",
  "&:hover": {
    backgroundColor: "$blue500",
  },
  variants: {
    variant: {
      outlined: {
        backgroundColor: "transparent",
        color: "$blue500",

        "&:hover": {
          backgroundColor: "$gray100",
        },
      },
    },
  },
});
