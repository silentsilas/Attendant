import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LabelProps } from "./Label";

import { Label } from "./Label";

export default {
  title: "Label",
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: LabelProps) => (
  <Label {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Read the wandering inn",
  htmlFor: "thewanderinginn",
};
