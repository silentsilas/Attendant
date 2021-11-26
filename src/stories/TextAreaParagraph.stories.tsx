import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextAreaParagraphProps } from "./TextAreaParagraph";

import { TextAreaParagraph } from "./TextAreaParagraph";

export default {
  title: "TextAreas/TextAreaParagraph",
  component: TextAreaParagraph,
  argTypes: {},
} as ComponentMeta<typeof TextAreaParagraph>;

const Template: ComponentStory<typeof TextAreaParagraph> = (
  args: TextAreaParagraphProps
) => <TextAreaParagraph {...args} />;

const lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, velit provident! Earum esse eum iure, aut repellat distinctio accusamus facilis quia! Officia, obcaecati. Neque, tempore. Modi harum consequatur dicta at? Accusantium ipsum nam vel doloremque eum fuga repellendus consectetur voluptatum amet cumque temporibus atque, iure dolor aliquid esse quaerat nulla repellat, dolore eaque exercitationem accusamus maiores obcaecati! Animi, quos facere! Qui esse soluta maiores expedita, vero mollitia dolorum ducimus impedit quis, rem beatae dolore quod tempore adipisci quaerat quos veniam recusandae voluptatum corrupti sint explicabo dolorem cumque? Reiciendis, odit in!";

export const Default = Template.bind({});
Default.args = {
  children: lorem,
  id: "testId",
  minHeight: "12.5rem",
  maxHeight: "30rem",
};
