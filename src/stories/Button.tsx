import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";
import { darken } from "polished";

import { color, typography } from "../shared/styles";

export interface ButtonProps {
  children: ReactNode | null;
  style?: CSS.Properties;
  variant?: "primary" | "secondary";
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  variant = "primary",
  onClick,
}) => {
  return (
    <StyledButton variant={variant} style={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  border-radius: 25px;
  cursor: pointer;

  padding: 1rem 2rem;
  min-width: 10rem;

  font-size: 1.4rem;
  font-family: ${typography.primary};
  font-weight: ${typography.weight.heavy};

  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translateY(-2px);
  }

  ${(props) =>
    props.variant === "primary" &&
    css`
      color: ${color.white};
      background-color: ${color.primary};

      &:hover {
        background-color: ${darken(0.05, color.primary)};
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      color: ${color.black};
      background-color: ${color.secondary};

      &:hover {
        background-color: ${darken(0.1, color.secondary)};
      }
    `}
`;
