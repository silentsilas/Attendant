import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import CSS from "csstype";

interface SpacerProps {
  style?: CSS.Properties;
  space?: string;
}

const Spacer: FC<SpacerProps> = ({ style, space = "20px" }) => {
  return <StyledDiv style={style} space={space} />;
};

export default Spacer;

const StyledDiv = styled.div<SpacerProps>`
  height: ${(props) => props.space};
`;
