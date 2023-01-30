import { InputCSS, LabelCSS } from "@freedom-ds/styles";
import { StitchesTypes, styled } from "@freedom-ds/web";
import React, { forwardRef } from "react";

import * as Label from "@radix-ui/react-label";

const StyledInput = styled("input", InputCSS);

const LabelRoot = styled(Label.Root, LabelCSS);

const LabelFlex = styled(Label.Root, {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  "& > input": {
    marginTop: "$2",
  },
});

export enum InputVariants {
  default = "default",
  mint = "mint",
}

export type InputProps = {
  variant?: InputVariants;
  label?: string;
  defaultValue?: string;
  error?: boolean;
};

export const Input = forwardRef<
  React.ElementRef<typeof StyledInput>,
  InputProps
>(({ ...props }) => {
  return (
    <LabelFlex htmlFor="Label">
      <LabelRoot {...props}>{props.label}</LabelRoot>
      <StyledInput {...props} />
    </LabelFlex>
  );
});
