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

export interface FileInputProps {
  style?: CSS.Properties;
  variant?: "primary" | "disabled-light" | "disabled-medium";
  id: string;
  /* onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; */
  placeholder?: string;
}

const FileInput: FC<FileInputProps> = ({
  style,
  variant = "primary",
  id,
  placeholder = "",
}) => {
  return (
    <StyledInput
      style={style}
      variant={variant}
      id={id}
      placeholder={placeholder}
      type="file"
    />
  );
};

export default FileInput;

const StyledInput = styled.input<FileInputProps>`
  border-radius: ${borderRadius.medium};
  border: 5px dotted black;
  padding: ${padding.medium};
  width: 100%;

  font-size: ${fontSize.medium};
  font-family: ${typography.primary};
  font-weight: ${typography.weight.regular};

  appearance: none;
  &:focus-visible {
    outline: none;
  }
`;
