import { ButtonCSS } from "@freedom-ds/styles";
import { styled } from "@freedom-ds/web";

const StyledButton = styled("button", ButtonCSS);
const StyledButtonOutlined = styled("button", ButtonCSS);

enum ButtonVariants {
  green = "green",
  outlined = "outlined",
}

export type ButtonStyleProps = {
  variant: ButtonVariants;
  label: string;
  outlined: boolean;
};

export function Button({ variant, label, outlined }: ButtonStyleProps) {
  return (
    <StyledButton variant={variant} outlined={outlined}>
      {label}
    </StyledButton>
  );
}
