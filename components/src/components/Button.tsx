import { ButtonCSS } from "@freedom-ds/styles";
import { styled } from "@freedom-ds/web";

const StyledButton = styled("button", ButtonCSS, styled);

export function Button() {
  return <StyledButton>Hello World ! 🌏</StyledButton>;
}
