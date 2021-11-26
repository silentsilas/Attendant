import React, { ReactNode } from "react";
import styled from "styled-components";
import CSS from "csstype";
import { rgba } from "polished";
import {
  typography,
  borderRadius,
  padding,
  color,
  opacity,
} from "../shared/styles";

export interface TextAreaParagraphProps {
  children: ReactNode | null;
  style?: CSS.Properties;
  id: string;
  minHeight?: string;
  maxHeight?: string;
}

const TextAreaParagraph: React.FC<TextAreaParagraphProps> = ({
  children,
  style,
  id,
  minHeight = "12.5rem",
  maxHeight = "30rem",
}) => {
  return (
    <StyledParagraph
      id={id}
      minHeight={minHeight}
      maxHeight={maxHeight}
      style={style}
    >
      {children}
    </StyledParagraph>
  );
};

export { TextAreaParagraph };

const StyledParagraph = styled.p<TextAreaParagraphProps>`
  border-radius: ${borderRadius.medium};
  border: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: ${padding.medium};

  width: 100%;
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  overflow-y: auto;

  text-align: left;
  font-size: ${typography.size.medium};
  font-family: ${typography.family.primary};
  font-weight: ${typography.weight.regular};

  color: white;
  background-color: ${rgba(color.white, opacity.dark)};

  &::placeholder {
    color: ${color.white};
  }
`;
