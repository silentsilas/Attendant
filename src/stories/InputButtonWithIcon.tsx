import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";
import { rgba } from "polished";
import Icon from "./Icon";

import {
  color,
  padding,
  borderRadius,
  typography,
  fontSize,
  opacity,
} from "../shared/styles";

export interface InputButtonWithIconProps {
  style?: CSS.Properties;
  id: string;
  variant: "copy" | "download";
  value: string;
  onClick: () => void;
}

const InputButtonWithIcon: FC<InputButtonWithIconProps> = ({
  style,
  id,
  variant,
  value,
  onClick,
}) => {
  return (
    <StyledDiv>
      <StyledInput
        style={style}
        id={id}
        variant={variant}
        value={value}
        onClick={onClick}
      />

      <Icon iconName={variant} onClick={onClick} />
    </StyledDiv>
  );
};

export default InputButtonWithIcon;

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input<InputButtonWithIconProps>`
  border: 0;
  border-radius: ${borderRadius.medium};
  cursor: pointer;

  padding: ${padding.medium};
  padding-right: 6rem;
  width: 100%;
  overflow: hidden;

  font-size: ${fontSize.medium};
  font-family: ${typography.primary};
  font-weight: ${typography.weight.heavy};
  text-align: left;

  ${(props) =>
    props.variant === "copy" &&
    css`
      background-color: ${color.white};
      color: ${color.black};
    `}

  ${(props) =>
    props.variant === "download" &&
    css`
      background-color: ${rgba(color.white, opacity.medium)};
      color: ${color.white};
    `}
`;
