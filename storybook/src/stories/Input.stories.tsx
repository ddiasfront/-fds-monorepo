import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input, InputVariants } from "@freedom-ds/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Label",
  defaultValue: "Default",
};

export const Mint = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mint.args = {
  label: "Label",
  defaultValue: "Mint",
  variant: InputVariants.mint,
};

export const MintWoLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MintWoLabel.args = {
  defaultValue: "Username",
  variant: InputVariants.mint,
};

export const MintWoLabelWError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MintWoLabelWError.args = {
  defaultValue: "Username",
  variant: InputVariants.mint,
  error: true,
};
