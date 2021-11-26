import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import CSS from "csstype";

import { color, typography } from "../shared/styles";

export interface Header3Props {
  children: ReactNode | null;
  style?: CSS.Properties;
  small?: boolean;
}

const Header3: FC<Header3Props> = ({ children, style, small }) => {
  return (
    <StyledHeader3 style={style} small={small}>
      {children}
    </StyledHeader3>
  );
};

export { Header3 };

const StyledHeader3 = styled.h3<Header3Props>`
  font-size: ${(props) =>
    props.small ? typography.size.medium : typography.size.large};
  font-family: ${typography.family.primary};
  font-weight: ${typography.weight.regular};

  color: ${color.white};
`;
