import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SecretCreationPage3 from "./SecretCreationPage3";

export default {
  title: "Pages/SecretCreationPage3",
  component: SecretCreationPage3,
  argTypes: {},
} as ComponentMeta<typeof SecretCreationPage3>;

const Template: ComponentStory<typeof SecretCreationPage3> = () => (
  <SecretCreationPage3 />
);

export const Default = Template.bind({});
