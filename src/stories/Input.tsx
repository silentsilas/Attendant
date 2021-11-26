import React, { FC } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";
import { rgba } from "polished";

import {
  color,
  opacity,
  typography,
  borderRadius,
  padding,
  outline,
} from "../shared/styles";

export interface InputProps {
  style?: CSS.Properties;
  variant?: "primary" | "disabled-light" | "disabled-medium";
  id: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  style,
  variant = "primary",
  id,
  value,
  onChange,
  placeholder = "",
}) => {
  const disabled =
    variant === "disabled-light" || variant === "disabled-medium"
      ? true
      : false;

  return (
    <StyledInput
      style={style}
      variant={variant}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      disabled={disabled}
    />
  );
};

export { Input };

const StyledInput = styled.input<InputProps>`
  border-radius: ${borderRadius.medium};
  border: none;
  padding: ${padding.medium};
  width: 100%;
  height: 6rem;

  color: ${color.darkblue};
  font-size: ${typography.size.medium};
  font-family: ${typography.family.primary};
  font-weight: ${typography.weight.regular};

  &::placeholder {
    color: ${color.darkblue};
  }

  appearance: none;
  &:focus,
  &:focus-visible {
    outline: ${outline.regular};
  }

  ${(props) =>
    (props.variant === "disabled-light" ||
      props.variant === "disabled-medium") &&
    css`
      cursor: not-allowed;
      color: ${color.white};

      &::placeholder {
        color: ${color.white};
      }
    `}

  ${(props) =>
    props.variant === "disabled-light" &&
    css`
      background-color: ${rgba(color.white, opacity.light)};
    `}

  ${(props) =>
    props.variant === "disabled-medium" &&
    css`
      background-color: ${rgba(color.white, opacity.medium)};
    `}
`;
