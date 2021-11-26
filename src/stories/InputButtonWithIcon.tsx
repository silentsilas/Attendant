import React, { FC } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";
import { rgba } from "polished";
import { Icon } from "./Icon";

import {
  color,
  padding,
  borderRadius,
  typography,
  opacity,
  outline,
} from "../shared/styles";

export interface InputButtonWithIconProps {
  style?: CSS.Properties;
  id: string;
  variant: "copy" | "download" | "fileinput";
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
        type="button"
      />

      <Icon iconName={variant} onClick={onClick} />
    </StyledDiv>
  );
};

export { InputButtonWithIcon };

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
`;

const StyledInput = styled.input<InputButtonWithIconProps>`
  border: 0;
  border-radius: ${borderRadius.medium};
  cursor: pointer;

  padding: ${padding.medium};
  padding-right: 6rem;
  width: 100%;
  height: 6rem;
  overflow: hidden;

  font-size: ${typography.size.medium};
  font-family: ${typography.family.primary};
  font-weight: ${typography.weight.regular};
  text-align: left;

  &:focus,
  &:focus-visible {
    outline: ${outline.regular};
  }

  ${(props) =>
    props.variant === "copy" &&
    css`
      background-color: ${color.white};
      color: ${color.darkblue};
    `}

  ${(props) =>
    props.variant === "download" &&
    css`
      background-color: ${rgba(color.white, opacity.dark)};
      color: ${color.white};
    `}

    ${(props) =>
    props.variant === "fileinput" &&
    css`
      background-color: ${color.white};
      color: ${color.darkblue};
      border: 2px dashed ${rgba(color.darkblue, opacity.medium)};
    `}
`;
