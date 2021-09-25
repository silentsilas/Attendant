import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FileInputProps } from "./FileInput";

import FileInput from "./FileInput";

export default {
  title: "FileInput",
  component: FileInput,
  argTypes: {},
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args: FileInputProps) => (
  <FileInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = { id: "fileinput", value: "Input file" };
