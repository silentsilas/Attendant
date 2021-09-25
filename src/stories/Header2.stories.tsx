import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header2Props } from "./Header2";

import Header2 from "./Header2";

export default {
  title: "Headers/Header2",
  component: Header2,
  argTypes: {},
} as ComponentMeta<typeof Header2>;

const Template: ComponentStory<typeof Header2> = (args: Header2Props) => (
  <Header2 {...args} />
);

export const Default = Template.bind({});
Default.args = { children: "Create a secret" };
