import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@freedom-ds/components";

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
  variant: "green",
  label: "Hello World 🌏",
};

export const OutlinedGreen = Template.bind({});
OutlinedGreen.args = {
  variant: "green",
  outlined: true,
  label: "Hello World 🌏",
};
