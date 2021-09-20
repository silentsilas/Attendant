import React from "react";

import ProgressIndicator from "./stories/ProgressIndicator";

import Header1 from "./stories/Header1";
import Header2 from "./stories/Header2";

import Button from "./stories/Button";

import Label from "./stories/Label";

import CenteredContainer from "./stories/CenteredContainer";
import SpaceBetweenContainer from "./stories/SpaceBetweenContainer";
import Spacer from "./stories/Spacer";
import TextAlignWrapper from "./stories/TextAlignWrapper";

function App() {
  return (
    <CenteredContainer fullscreen>
      <CenteredContainer>
        <ProgressIndicator current={3} />
        {/* <Header1>Securely Share Your Secrets</Header1> */}
        <Spacer />
        <Header2>Tell someone</Header2>
        <Spacer />
        <TextAlignWrapper align="left">
          <Label htmlFor="testInput">Testing label</Label>
        </TextAlignWrapper>
        <input type="text" name="testInput" style={{ width: "100%" }} />
        <Spacer />
        <SpaceBetweenContainer>
          <Label htmlFor="testInput2">Testing label left</Label>
          <Label htmlFor="testInput2">Testing label right</Label>
        </SpaceBetweenContainer>
        <input type="text" name="testInput2" style={{ width: "100%" }} />
        <Spacer />
        <SpaceBetweenContainer>
          <Button variant="secondary">Hello World</Button>
          <Button variant="secondary">Hello World</Button>
        </SpaceBetweenContainer>
      </CenteredContainer>
    </CenteredContainer>
  );
}

export default App;
