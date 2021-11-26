import React, { useState } from "react";

import { ProgressIndicator } from "./stories/ProgressIndicator";

import { Header1 } from "./stories/Header1";
import { Header2 } from "./stories/Header2";

import { Button } from "./stories/Button";
import { IconArrow } from "./stories/IconArrow";
import { InputButtonWithIcon } from "./stories/InputButtonWithIcon";

import { Label } from "./stories/Label";
import { Input } from "./stories/Input";
import { AutoResizingTextArea } from "./stories/AutoResizingTextArea";
import { Select } from "./stories/Select";

import { CenteredContainer } from "./stories/utilities/CenteredContainer";
import { SpaceBetweenContainer } from "./stories/utilities/SpaceBetweenContainer";
import { Spacer } from "./stories/utilities/Spacer";
import { TextAlignWrapper } from "./stories/utilities/TextAlignWrapper";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [select, setSelect] = useState("github");

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput2(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return (
    <CenteredContainer fullscreen>
      <CenteredContainer>
        <ProgressIndicator currentProgress={3} />
        {/* <Header1>Securely Share Your Secrets</Header1> */}
        <Spacer />
        <Header2>Tell someone</Header2>
        <Spacer />
        <TextAlignWrapper align="left">
          <Label htmlFor="testInput">Testing label</Label>
        </TextAlignWrapper>
        <Input
          variant="primary"
          id="testInput"
          value={input1}
          onChange={handleInputChange1}
          placeholder="testing 1 2 3"
        />
        <Spacer />
        <InputButtonWithIcon
          id="testinputbutton"
          value="https://wanderinginn.com"
          variant="download"
          onClick={() => {}}
        />
        <Spacer />
        <Select
          id="selectService"
          value={select}
          onChange={handleSelectChange}
        />
        <Spacer />
        <SpaceBetweenContainer>
          <Label htmlFor="testInput2">Testing label left</Label>
          <Label htmlFor="testInput2">Testing label right</Label>
        </SpaceBetweenContainer>
        <AutoResizingTextArea
          id="testTextArea"
          value={input2}
          onChange={handleInputChange2}
          placeholder="Tell me your secrets"
        />
        <Spacer />
        <SpaceBetweenContainer>
          <Button variant="primary" onClick={() => {}}>
            <IconArrow arrowDirection="left" />
          </Button>
          <Button variant="secondary" onClick={() => {}}>
            <IconArrow arrowDirection="right" />
          </Button>
        </SpaceBetweenContainer>
      </CenteredContainer>
    </CenteredContainer>
  );
}

export default App;
