import React, { useState } from "react";

import ProgressIndicator from "./stories/ProgressIndicator";

import Header1 from "./stories/Header1";
import Header2 from "./stories/Header2";

import Button from "./stories/Button";

import Label from "./stories/Label";
import Input from "./stories/Input";

import CenteredContainer from "./stories/CenteredContainer";
import SpaceBetweenContainer from "./stories/SpaceBetweenContainer";
import Spacer from "./stories/Spacer";
import TextAlignWrapper from "./stories/TextAlignWrapper";

function App() {
  const [input1, setInput1] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };

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
        <Input
          variant="disabled-medium"
          name="testInput"
          value={input1}
          onChange={handleInputChange}
          placeholder="testing 1 2 3"
        />
        <Spacer />
        <SpaceBetweenContainer>
          <Label htmlFor="testInput2">Testing label left</Label>
          <Label htmlFor="testInput2">Testing label right</Label>
        </SpaceBetweenContainer>
        <input type="text" name="testInput2" style={{ width: "100%" }} />
        <Spacer />
        <SpaceBetweenContainer>
          <Button variant="secondary" onClick={() => {}}>
            Hello World
          </Button>
          <Button variant="secondary" onClick={() => {}}>
            Hello World
          </Button>
        </SpaceBetweenContainer>
      </CenteredContainer>
    </CenteredContainer>
  );
}

export default App;
