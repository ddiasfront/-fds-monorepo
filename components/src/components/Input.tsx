import { InputCSS } from "@freedom-ds/styles";
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

const StyledInput = styled("input", InputCSS);

export const Input = forwardRef<React.ElementRef<typeof StyledInput>>(
  ({ ...props }) => {
    return <StyledInput {...props} />;
  }
);

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
