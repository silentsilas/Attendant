import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";

import { color } from "../../shared/styles";

interface CenteredContainerProps {
  children: ReactNode | null;
  style?: CSS.Properties;
  className?: string | undefined;
  fullscreen?: boolean;
  wide?: boolean;
}

const CenteredContainer: FC<CenteredContainerProps> = ({
  children,
  style,
  className,
  fullscreen = false,
  wide = false,
}) => {
  return (
    <StyledDiv style={style} fullscreen={fullscreen} wide={wide} className={className}>
      {children}
    </StyledDiv>
  );
};

export { CenteredContainer };

const StyledDiv = styled.div<CenteredContainerProps>`
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.fullscreen &&
    css`
      width: 100%;
      background: linear-gradient(180deg, #060b2e 0%, #051745 100%);
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
