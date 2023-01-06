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

export const Green = Template.bind({});
Green.args = {
  variant: ButtonVariants.green,
  label: "Hello World 🌏",
};

export const OutlinedGreen = Template.bind({});
OutlinedGreen.args = {
  variant: ButtonVariants.green,
  outlined: true,
  label: "Hello World 🌏",
};

export const OutlinedGreenSize2 = Template.bind({});
OutlinedGreenSize2.args = {
  variant: ButtonVariants.green,
  size: { "@initial": "1", "@media(min-width:500px)": "2" },
  outlined: true,
  label: "Hello World 🌏",
};
