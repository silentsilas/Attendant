import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SecretCreationPage1 from "./SecretCreationPage1";

export default {
  title: "Pages/SecretCreationPage1",
  component: SecretCreationPage1,
  argTypes: {},
} as ComponentMeta<typeof SecretCreationPage1>;

const Template: ComponentStory<typeof SecretCreationPage1> = () => (
  <SecretCreationPage1 />
);

export const Default = Template.bind({});
