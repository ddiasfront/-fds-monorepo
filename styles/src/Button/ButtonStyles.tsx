import { css } from "@stitches/core";

export const ButtonCSS = css({
  px: "$3",
  border: "1.25px solid $blue500",
  borderRadius: "$rl",
  fontSize: "$xl",
  fontWeight: "$thin",
  fontFamily: "Work Sans",
  backgroundColor: "$blue600",
  color: "$white100",
  transition: "all 0.5s ease",
  "&:hover": {
    backgroundColor: "$blue500",
  },
});
