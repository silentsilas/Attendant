import React, { FC } from "react";
import styled from "styled-components";
import CSS from "csstype";

import {
  color,
  typography,
  borderRadius,
  outline,
  padding,
} from "../shared/styles";

export interface TextAreaProps {
  style?: CSS.Properties;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea: FC<TextAreaProps> = ({
  style,
  id,
  value,
  onChange,
  placeholder = "",
}) => {
  return (
    <StyledTextArea
      style={style}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export { TextArea };

const StyledTextArea = styled.textarea<TextAreaProps>`
  border-radius: ${borderRadius.medium};
  border: none;
  padding: ${padding.medium};
  width: 100%;
  height: 21.6rem;

  color: ${color.darkblue};
  font-size: ${typography.size.medium};
  font-family: ${typography.family.primary};
  font-weight: ${typography.weight.regular};

  appearance: none;
  &:focus-visible {
    outline: ${outline.regular};
  }

  &::placeholder {
    color: ${color.darkblue};
  }
`;
