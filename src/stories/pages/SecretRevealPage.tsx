import React from "react";

import { Header2 } from"../Header2";
import { Header3 } from"../Header3";

import { Button } from"../Button";

import { Label } from"../Label";
import { InputButtonWithIcon } from"../InputButtonWithIcon";

import { TextAreaParagraph } from"../TextAreaParagraph";

import { CenteredContainer } from"../utilities/CenteredContainer";
import { SpaceBetweenContainer } from"../utilities/SpaceBetweenContainer";
import { Spacer } from"../utilities/Spacer";
import { TextAlignWrapper } from"../utilities/TextAlignWrapper";

const SecretRevealPage = () => {
  return (
    <CenteredContainer fullscreen>
      <CenteredContainer>
        <Header2 style={{ margin: ".4rem" }}>Someone sent you a secret</Header2>
        <Header3 small>
          Please verify your identity to reveal this message.
        </Header3>
        <Spacer space="3rem" />

        <SpaceBetweenContainer>
          <Label htmlFor="secretMessage">Secret message</Label>
          <Label htmlFor="secretMessage">Sent 8/24/21 @ 1:27pm</Label>
        </SpaceBetweenContainer>
        <TextAreaParagraph id="secretMessage">
          "Sup. What are you doing for lunch?"
        </TextAreaParagraph>

        <Spacer space="3rem" />
        <TextAlignWrapper align="left">
          <Label htmlFor="service">Secret File</Label>
        </TextAlignWrapper>
        <InputButtonWithIcon
          variant="download"
          id="downloadfile"
          value="1780983.jpg"
          onClick={() => {}}
        />
        <Spacer space="3rem" />
        <Button variant="secondary" wide onClick={() => {}}>
          Send a secret
        </Button>
      </CenteredContainer>
    </CenteredContainer>
  );
};

export default SecretRevealPage;
