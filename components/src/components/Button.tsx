import { ButtonCSS } from "@freedom-ds/styles";
import { styled, css } from "@freedom-ds/web";
import React, { forwardRef } from "react";

export enum ButtonVariants {
  default = "default",
  green = "green",
}

export type ButtonStyleProps = {
  variant: ButtonVariants;
  label: string;
  outlined: boolean;
  size: 1 | 2;
};

const StyledButton = styled("button", ButtonCSS);

export const Button = forwardRef<
  React.ElementRef<typeof StyledButton>,
  ButtonStyleProps
>(({ ...props }) => {
  return <StyledButton {...props}>{props.label}</StyledButton>;
});
