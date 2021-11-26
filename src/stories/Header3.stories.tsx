import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header3Props } from "./Header3";

import Header3 from "./Header3";

export default {
  title: "Headers/Header3",
  component: Header3,
  argTypes: {},
} as ComponentMeta<typeof Header3>;

const Template: ComponentStory<typeof Header3> = (args: Header3Props) => (
  <Header3 {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children:
    "With Intended Link you can easily share messages and files securely and secretly.",
};

export const WithSmall = Template.bind({});
WithSmall.args = {
  children: "Please verify your identity to reveal this message.",
  small: true,
};
