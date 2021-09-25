import React, { FC, useState, useRef } from "react";
import styled from "styled-components";
import CSS from "csstype";

import {
  color,
  outline,
  typography,
  borderRadius,
  padding,
} from "../shared/styles";

export interface AutoResizingTextAreaProps {
  style?: CSS.Properties;
  id: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  minHeight?: string;
  maxHeight?: string;
}

const AutoResizingTextArea: FC<AutoResizingTextAreaProps> = ({
  style,
  id,
  value,
  onChange,
  placeholder = "Tell me your secrets",
  minHeight = "21.6rem",
  maxHeight = "60rem",
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [divHeight, setDivHeight] = useState(minHeight);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newOrMaxHeight =
      textAreaRef.current!.scrollHeight < parseInt(maxHeight)
        ? `${textAreaRef.current!.scrollHeight}px`
        : maxHeight;

    setDivHeight(newOrMaxHeight);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <StyledDiv height={divHeight}>
      <StyledTextArea
        style={style}
        id={id}
        ref={textAreaRef}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </StyledDiv>
  );
};

export default AutoResizingTextArea;

interface DivProps {
  height: string;
}

const StyledDiv = styled.div<DivProps>`
  height: ${(props) => props.height};
  width: 100%;
`;

const StyledTextArea = styled.textarea<AutoResizingTextAreaProps>`
  border-radius: ${borderRadius.medium};
  border: none;
  padding: ${padding.medium};
  width: 100%;
  height: 100%;

  color: ${color.darkblue};
  font-size: ${typography.size.medium};
  font-family: ${typography.family.primary};
  font-weight: ${typography.weight.regular};

  appearance: none;

  &::placeholder {
    color: ${color.darkblue};
  }

  &:focus,
  &:focus-visible {
    outline: ${outline.regular};
  }
`;
