import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";

interface TextAlignWrapperProps {
  children: ReactNode | null;
  style?: CSS.Properties;
  align: "left" | "center" | "right";
  marginBottom?: boolean;
}

const TextAlignWrapper: FC<TextAlignWrapperProps> = ({
  children,
  style,
  align = "left",
  marginBottom = true,
}) => {
  return (
    <StyledDiv style={style} align={align} marginBottom={marginBottom}>
      {children}
    </StyledDiv>
  );
};

export { TextAlignWrapper };

const StyledDiv = styled.div<TextAlignWrapperProps>`
  text-align: ${(props) => props.align};
  width: 100%;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 0.7rem;
    `}
`;
