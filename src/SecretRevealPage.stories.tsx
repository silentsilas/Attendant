import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SecretRevealPage from "./SecretRevealPage";

export default {
  title: "Pages/SecretRevealPage",
  component: SecretRevealPage,
  argTypes: {},
} as ComponentMeta<typeof SecretRevealPage>;

const Template: ComponentStory<typeof SecretRevealPage> = () => (
  <SecretRevealPage />
);

export const Default = Template.bind({});
