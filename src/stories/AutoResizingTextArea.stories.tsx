import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AutoResizingTextAreaProps } from "./AutoResizingTextArea";

import AutoResizingTextArea from "./AutoResizingTextArea";

export default {
  title: "TextAreas/AutoResizingTextArea",
  component: AutoResizingTextArea,
  argTypes: {},
} as ComponentMeta<typeof AutoResizingTextArea>;

const Template: ComponentStory<typeof AutoResizingTextArea> = (
  args: AutoResizingTextAreaProps
) => <AutoResizingTextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "testId",
};
