import { ButtonCSS } from "@freedom-ds/styles";
import { styled, css, StitchesTypes } from "@freedom-ds/web";
import React, { forwardRef } from "react";

export enum ButtonVariants {
  default = "default",
  mint = "mint",
}

export type ButtonStyleProps = {
  variant: ButtonVariants;
  label: string;
  outlined: boolean;
  size: StitchesTypes.CSS;
};

const StyledButton = styled("button", ButtonCSS);

export const Button = forwardRef<
  React.ElementRef<typeof StyledButton>,
  ButtonStyleProps
>(({ ...props }) => {
  return <StyledButton {...props}>{props.label}</StyledButton>;
});
