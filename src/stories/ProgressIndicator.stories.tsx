import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProgressIndicatorProps } from "./ProgressIndicator";

import ProgressIndicator from "./ProgressIndicator";

export default {
  title: "SVGs/ProgressIndicator",
  component: ProgressIndicator,
  argTypes: {},
} as ComponentMeta<typeof ProgressIndicator>;

const Template: ComponentStory<typeof ProgressIndicator> = (
  args: ProgressIndicatorProps
) => <ProgressIndicator {...args} />;

export const StepOneOfThree = Template.bind({});
StepOneOfThree.args = { currentProgress: 1 };

export const StepTwoOfThree = Template.bind({});
StepTwoOfThree.args = { currentProgress: 2 };

export const StepThreeOfThree = Template.bind({});
StepThreeOfThree.args = { currentProgress: 3 };
