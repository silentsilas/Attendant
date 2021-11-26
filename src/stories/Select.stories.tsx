import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectProps } from "./Select";

import { Select } from "./Select";

export default {
  title: "Select",
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: SelectProps) => (
  <Select {...args} />
);

export const Default = Template.bind({});
Default.args = { id: "testId" };
