import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SplashPage from "./SplashPage";

export default {
  title: "Pages/SplashPage",
  component: SplashPage,
  argTypes: {},
} as ComponentMeta<typeof SplashPage>;

const Template: ComponentStory<typeof SplashPage> = () => <SplashPage />;

export const Default = Template.bind({});
