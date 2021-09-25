import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import CSS from "csstype";

import { typography, color } from "../shared/styles";

export interface LabelProps {
  children: ReactNode | null;
  style?: CSS.Properties;
  htmlFor: string;
}

const Label: FC<LabelProps> = ({ children, style, htmlFor }) => {
  return (
    <StyledLabel style={style} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};

export default Label;

const StyledLabel = styled.label<LabelProps>`
  color: ${color.white};
  font-size: ${typography.size.small};
  font-family: ${typography.family.primary};
  font-weight: ${typography.weight.heavy};

  margin-bottom: 0.7rem;
`;
