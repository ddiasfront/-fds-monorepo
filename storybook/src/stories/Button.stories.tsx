import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonVariants } from "@freedom-ds/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Hello World 🌏",
};

export const Mint = Template.bind({});
Mint.args = {
  variant: ButtonVariants.mint,
  label: "Hello World 🌏",
};

export const OutlinedMint = Template.bind({});
OutlinedMint.args = {
  variant: ButtonVariants.mint,
  outlined: true,
  label: "Hello World 🌏",
};

export const OutlinedMintSize2 = Template.bind({});
OutlinedMintSize2.args = {
  variant: ButtonVariants.mint,
  size: { "@initial": "1", "@media(min-width:500px)": "2" },
  outlined: true,
  label: "Hello World 🌏",
};
