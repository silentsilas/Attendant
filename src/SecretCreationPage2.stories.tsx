import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SecretCreationPage2 from "./SecretCreationPage2";

export default {
  title: "Pages/SecretCreationPage2",
  component: SecretCreationPage2,
  argTypes: {},
} as ComponentMeta<typeof SecretCreationPage2>;

const Template: ComponentStory<typeof SecretCreationPage2> = () => (
  <SecretCreationPage2 />
);

export const Default = Template.bind({});
