import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import CSS from "csstype";

import { typography } from "../shared/styles";

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
  font-size: 1.4rem;
  font-family: ${typography.regular};
  font-weight: ${typography.weight.heavy};

  margin-bottom: 0.7rem;
`;
