import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SplashIconHeader from "./SplashIconHeader";

export default {
  title: "SVGs/SplashIconHeader",
  component: SplashIconHeader,
  argTypes: {},
} as ComponentMeta<typeof SplashIconHeader>;

const Template: ComponentStory<typeof SplashIconHeader> = () => (
  <SplashIconHeader />
);

export const Default = Template.bind({});
