import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";
import { darken, lighten } from "polished";

import { borderRadius, color, typography } from "../shared/styles";

export interface ButtonProps {
  children: ReactNode | null;
  style?: CSS.Properties;
  variant?: "primary" | "secondary";
  boldFont?: boolean;
  wide?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  variant = "primary",
  boldFont = false,
  wide = false,
  onClick,
}) => {
  return (
    <StyledButton
      variant={variant}
      boldFont={boldFont}
      wide={wide}
      style={style}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export { Button };

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  border-radius: ${borderRadius.large};
  cursor: pointer;

  padding: 1rem 3rem;
  height: 5rem;
  min-width: ${(props) => (props.wide ? "18rem" : "8rem")};

  font-size: ${typography.size.small};
  font-family: ${typography.family.primary};
  font-weight: ${(props) =>
    props.boldFont ? typography.weight.bold : typography.weight.heavy};

  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover,
  &:focus {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
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
      color: ${color.darkblue};
      background-color: ${color.secondary};

      &:hover {
        background-color: ${lighten(0.1, color.secondary)};
      }
    `}
`;
