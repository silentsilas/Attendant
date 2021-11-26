import React, { useState } from "react";

import { ProgressIndicator } from "./stories/ProgressIndicator";

import { Header2 } from "./stories/Header2";

import { Button } from "./stories/Button";
import { IconArrow } from "./stories/IconArrow";

import { Label } from "./stories/Label";
import { Input } from "./stories/Input";
import { Select } from "./stories/Select";

import { CenteredContainer } from "./stories/utilities/CenteredContainer";
import { SpaceBetweenContainer } from "./stories/utilities/SpaceBetweenContainer";
import { Spacer } from "./stories/utilities/Spacer";
import { TextAlignWrapper } from "./stories/utilities/TextAlignWrapper";

const SecretCreationPage2 = () => {
  const [recipientInput, setRecipientInput] = useState("");
  const [serviceSelect, setServiceSelect] = useState("");

  const handleRecipientInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecipientInput(e.target.value);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setServiceSelect(e.target.value);
  };

  return (
    <CenteredContainer fullscreen>
      <CenteredContainer>
        <ProgressIndicator currentProgress={2} />
        <Header2>Tell Someone</Header2>
        <SpaceBetweenContainer>
          <Label htmlFor="recipientInput">Who gets to know the secret?</Label>
          <Label htmlFor="recipientInput">Required*</Label>
        </SpaceBetweenContainer>
        <Input
          variant="primary"
          id="recipientInput"
          value={recipientInput}
          onChange={handleRecipientInputChange}
          placeholder="Username or Email"
        />
        <Spacer space="2.5rem" />
        <TextAlignWrapper align="left">
          <Label htmlFor="serviceSelector">
            What type of account is the above username or email associated with?
          </Label>
        </TextAlignWrapper>
        <Select
          id="serviceSelector"
          onChange={handleServiceChange}
          value={serviceSelect}
        />
        <Spacer space="3rem" />
        <SpaceBetweenContainer>
          <Button variant="secondary" onClick={() => {}}>
            <IconArrow arrowDirection="left" />
          </Button>
          <Button onClick={() => {}}>Generate Secret Code</Button>
        </SpaceBetweenContainer>
      </CenteredContainer>
    </CenteredContainer>
  );
};

export default SecretCreationPage2;
