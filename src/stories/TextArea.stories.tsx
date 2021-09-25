import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextAreaProps } from "./TextArea";

import TextArea from "./TextArea";

export default {
  title: "TextAreas/TextArea",
  component: TextArea,
  argTypes: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args: TextAreaProps) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "testId",
  placeholder: "Tell me your secrets",
};
