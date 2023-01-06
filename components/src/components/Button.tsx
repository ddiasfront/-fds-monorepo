import { ButtonCSS } from "@freedom-ds/styles";
import { styled, css, StitchesTypes } from "@freedom-ds/web";
import React, { forwardRef } from "react";

export enum ButtonVariants {
  default = "default",
  green = "green",
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

// export function Button({ variant, label, outlined, size }: ButtonStyleProps) {
//   return (
//     <button
//       className={ButtonCSS({
//         variant: variant,
//         outlined: outlined,
//         size: size,
//       })}
//     >
//       {label}
//     </button>
//   );
// }
