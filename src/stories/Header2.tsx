import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import CSS from "csstype";

import { color, typography } from "../shared/styles";

export interface Header2Props {
  children: ReactNode | null;
  style?: CSS.Properties;
}

const Header2: FC<Header2Props> = ({ children, style }) => {
  return <StyledHeader2 style={style}>{children}</StyledHeader2>;
};

export default Header2;

const StyledHeader2 = styled.h2<Header2Props>`
  font-size: 3.2rem;
  font-family: ${typography.family.heading};
  font-weight: ${typography.weight.regular};

  color: ${color.white};
`;
