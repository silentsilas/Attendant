import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonProps } from "./Button";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

/*
export const Narrow = Template.bind({});
Narrow.args = {
  label: ">",
  variant: "primary",
  narrow: true,
}; */
