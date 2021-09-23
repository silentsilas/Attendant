import React, { FC } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";
import { rgba } from "polished";

import {
  color,
  opacity,
  typography,
  borderRadius,
  fontSize,
  padding,
} from "../shared/styles";

export interface TextAreaProps {
  style?: CSS.Properties;
  disabled?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea: FC<TextAreaProps> = ({
  style,
  name,
  value,
  onChange,
  disabled = false,
  placeholder = "",
}) => {
  return (
    <StyledTextArea
      style={style}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default TextArea;

const StyledTextArea = styled.textarea<TextAreaProps>`
  border-radius: ${borderRadius.medium};
  border: none;
  padding: ${padding.medium};
  width: 100%;
  height: 21.6rem;

  font-size: ${fontSize.medium};
  font-family: ${typography.primary};
  font-weight: ${typography.weight.regular};

  appearance: none;
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${color.black};
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      height: 0;
      min-height: 12.5rem;

      color: white;
      background-color: ${rgba(color.white, opacity.medium)};

      &::placeholder {
        color: ${color.white};
      }
    `}
`;
