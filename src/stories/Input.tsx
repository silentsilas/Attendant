import React, { FC } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";
import { rgba } from "polished";

import { color, opacity, typography, input } from "../shared/styles";

export interface InputProps {
  style?: CSS.Properties;
  variant?: "primary" | "disabled-light" | "disabled-medium";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  // disabled = false,
}

const Input: FC<InputProps> = ({
  style,
  variant = "primary",
  name,
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
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      disabled={disabled}
    />
  );
};

export default Input;

const StyledInput = styled.input<InputProps>`
  border-radius: ${input.borderRadius};
  border: none;
  padding: ${input.padding};
  width: 100%;

  font-size: ${input.fontSize};
  font-family: ${typography.primary};
  font-weight: ${typography.weight.regular};

  appearance: none;
  &:focus-visible {
    outline: none;
  }

  ${(props) =>
    (props.variant === "disabled-light" ||
      props.variant === "disabled-medium") &&
    css`
      color: ${color.white};
      cursor: not-allowed;

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