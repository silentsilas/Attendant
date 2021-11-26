import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputProps } from "./Input";

import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

const defaultArgs = {
  id: "inputId",
  placeholder: "This is a placeholder",
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  variant: "primary",
};

export const DisabledLight = Template.bind({});
DisabledLight.args = {
  ...defaultArgs,
  variant: "disabled-light",
};

export const DisabledMedium = Template.bind({});
DisabledMedium.args = {
  ...defaultArgs,
  variant: "disabled-medium",
};
