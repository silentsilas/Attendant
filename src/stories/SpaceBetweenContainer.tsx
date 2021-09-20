import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";

interface SpaceBetweenContainerProps {
  children: ReactNode | null;
  style?: CSS.Properties;
  width100pct?: boolean;
}

const SpaceBetweenContainer: FC<SpaceBetweenContainerProps> = ({
  children,
  style,
  width100pct,
}) => {
  return (
    <StyledDiv style={style} width100pct={width100pct}>
      {children}
    </StyledDiv>
  );
};

export default SpaceBetweenContainer;

const StyledDiv = styled.div<SpaceBetweenContainerProps>`
  display: flex;
  justify-content: space-between;
  ${(props) =>
    props.width100pct &&
    css`
      width: 100%;
    `}
`;
