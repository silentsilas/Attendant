import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonProps } from "./Button";

import Button from "./Button";
import IconArrow from "./IconArrow";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  children: "Primary",
  variant: "primary",
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  children: "Secondary",
  variant: "secondary",
};

export const WithLeftArrowIcon = Template.bind({});
WithLeftArrowIcon.args = {
  children: <IconArrow arrowDirection="left" />,
  variant: "secondary",
};

export const WithRightArrowIcon = Template.bind({});
WithRightArrowIcon.args = {
  children: <IconArrow arrowDirection="right" />,
  variant: "secondary",
};

export const WithBoldFont = Template.bind({});
WithBoldFont.args = {
  children: "START SHARING",
  variant: "secondary",
};

export const WithWide = Template.bind({});
WithWide.args = {
  children: "Verify",
  variant: "primary",
  wide: true,
};
