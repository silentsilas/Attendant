import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import VerifyPage from "./VerifyPage";

export default {
  title: "Pages/VerifyPage",
  component: VerifyPage,
  argTypes: {},
} as ComponentMeta<typeof VerifyPage>;

const Template: ComponentStory<typeof VerifyPage> = () => <VerifyPage />;

export const Default = Template.bind({});
