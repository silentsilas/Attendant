import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";

import { color } from "../shared/styles";

interface CenteredContainerProps {
  children: ReactNode | null;
  style?: CSS.Properties;
  fullscreen?: boolean;
  wide?: boolean;
}

const CenteredContainer: FC<CenteredContainerProps> = ({
  children,
  style,
  fullscreen = false,
  wide = false,
}) => {
  return (
    <StyledDiv style={style} fullscreen={fullscreen} wide={wide}>
      {children}
    </StyledDiv>
  );
};

export default CenteredContainer;

const StyledDiv = styled.div<CenteredContainerProps>`
  height: 100vh;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.fullscreen &&
    css`
      width: 100vw;
      background-color: ${color.background};
    `}

  ${(props) =>
    !props.fullscreen &&
    css`
      max-width: 600px;
      width: 100%;
      padding: 0 30px;
    `}

    ${(props) =>
    !props.fullscreen &&
    props.wide &&
    css`
      max-width: 1200px;
    `}
`;
