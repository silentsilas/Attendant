import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputButtonWithIconProps } from "./InputButtonWithIcon";

import { InputButtonWithIcon } from "./InputButtonWithIcon";

export default {
  title: "InputButtonWithIcon",
  component: InputButtonWithIcon,
  argTypes: {},
} as ComponentMeta<typeof InputButtonWithIcon>;

const Template: ComponentStory<typeof InputButtonWithIcon> = (
  args: InputButtonWithIconProps
) => <InputButtonWithIcon {...args} />;

const defaultArgs = {
  id: "testId",
};

export const Copy = Template.bind({});
Copy.args = {
  ...defaultArgs,
  variant: "copy",
  value: "https://intended.link/for/you/MWUzZjg4YmEtZmNmNy00MDM1LWE2Ym",
};

export const Download = Template.bind({});
Download.args = {
  ...defaultArgs,
  variant: "download",
  value: "1780983.jpg",
};

export const Fileinput = Template.bind({});
Fileinput.args = {
  ...defaultArgs,
  variant: "fileinput",
  value: "Upload a secret file",
};
