import React from "react";
import styled from "styled-components";

import InputButtonWithIcon from "./stories/InputButtonWithIcon";

import Icon from "./stories/Icon";
import { ReactComponent as CopyIcon } from "./stories/assets/copy.svg";

function App2() {
  return (
    <StyledDiv>
      <InputButtonWithIcon
        id="inputtest"
        variant="download"
        onClick={() => {}}
        value="https://wanderinginn.com"
      />
      <div style={{ margin: "50px" }}></div>
      <Icon iconName="download" onClick={() => {}} />
      <CopyIcon />
    </StyledDiv>
  );
}

export default App2;

const StyledDiv = styled.div`
  height: 80vh;
  background-color: black;
  padding: 40px;
`;
