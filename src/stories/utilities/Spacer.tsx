import React, { FC } from "react";
import styled from "styled-components";
import CSS from "csstype";

interface SpacerProps {
  style?: CSS.Properties;
  space?: string;
}

const Spacer: FC<SpacerProps> = ({ style, space = "2rem" }) => {
  return <StyledDiv style={style} space={space} />;
};

export default Spacer;

const StyledDiv = styled.div<SpacerProps>`
  height: ${(props) => props.space};
`;
