import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import CSS from "csstype";

import { color, typography } from "../shared/styles";

export interface Header1Props {
  children: ReactNode | null;
  style?: CSS.Properties;
}

const Header1: FC<Header1Props> = ({ children, style }) => {
  return <StyledHeader1 style={style}>{children}</StyledHeader1>;
};

export default Header1;

const StyledHeader1 = styled.h2<Header1Props>`
  margin: 0.7rem auto;

  color: ${color.white};
  font-size: 6.4rem;
  font-family: ${typography.family.heading};
  font-weight: ${typography.weight.regular};
`;
