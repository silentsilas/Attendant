import React from "react";
import styled from "styled-components";

import { SplashIconHeader } from "./stories/SplashIconHeader";

function App2() {
  return (
    <StyledDiv>
      <SplashIconHeader />
    </StyledDiv>
  );
}

export default App2;

const StyledDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #091132;
  padding: 40px;
`;
