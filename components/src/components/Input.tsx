import { InputCSS } from "@freedom-ds/styles";
import { styled, css, StitchesTypes } from "@freedom-ds/web";
import React, { forwardRef } from "react";

const StyledInput = styled("input", InputCSS);

export const Input = forwardRef<React.ElementRef<typeof StyledInput>>(
  ({ ...props }) => {
    return <StyledInput {...props} />;
  }
);
