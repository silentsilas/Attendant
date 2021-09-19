import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import CSS from "csstype";

import { color, typography } from "../shared/styles";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  children: ReactNode | null;
  style?: CSS.Properties;
}

const Button: FC<ButtonProps> = ({ children, variant = "primary", style }) => {
  return (
    <StyledButton variant={variant} style={style}>
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
  font-family: ${typography.regular};
  font-weight: ${typography.weight.heavy};

  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  color: ${(props) =>
    props.variant === "primary" ? color.white : color.black};
  background-color: ${(props) =>
    props.variant === "primary" ? color.primary : color.secondary};

  &:hover {
    transform: translateY(-2px);
  }
`;
