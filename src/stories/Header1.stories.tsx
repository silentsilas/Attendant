import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header1Props } from "./Header1";

import { Header1 } from "./Header1";

export default {
  title: "Headers/Header1",
  component: Header1,
  argTypes: {},
} as ComponentMeta<typeof Header1>;

const Template: ComponentStory<typeof Header1> = (args: Header1Props) => (
  <Header1 {...args} />
);

export const Default = Template.bind({});
Default.args = { children: "Securely Share Your Secrets" };
