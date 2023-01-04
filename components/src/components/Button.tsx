import { ButtonCSS } from "@freedom-ds/styles";
import { styled } from "@freedom-ds/web";

const StyledButton = styled("button", ButtonCSS);
const StyledButtonOutlined = styled("button", ButtonCSS);

enum ButtonVariants {
  outlined = "outlined",
}

export type ButtonStyleProps = {
  variant: ButtonVariants;
  label: string;
};

export function Button({ variant, label }: ButtonStyleProps) {
  return <StyledButton variant={variant}>{label}</StyledButton>;
}
