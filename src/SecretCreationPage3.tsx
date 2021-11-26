import React from "react";

import ProgressIndicator from "./stories/ProgressIndicator";

import Header2 from "./stories/Header2";

import Button from "./stories/Button";
import IconArrow from "./stories/IconArrow";
import InputButtonWithIcon from "./stories/InputButtonWithIcon";

import Label from "./stories/Label";
import Input from "./stories/Input";

import CenteredContainer from "./stories/utilities/CenteredContainer";
import SpaceBetweenContainer from "./stories/utilities/SpaceBetweenContainer";
import Spacer from "./stories/utilities/Spacer";
import TextAlignWrapper from "./stories/utilities/TextAlignWrapper";

const SecretCreationPage3 = () => {
  return (
    <CenteredContainer fullscreen>
      <CenteredContainer>
        <ProgressIndicator currentProgress={3} />
        <Header2>Share the secret</Header2>
        <SpaceBetweenContainer>
          <Label htmlFor="shareLink">Secret message url</Label>
          <Label htmlFor="shareLink">
            Share this link with the intended recepient
          </Label>
        </SpaceBetweenContainer>
        <InputButtonWithIcon
          id="shareLink"
          onClick={() => {}}
          value="https://intended.link/for/you/MWUzZjg4YmEtZmNmNy00M..."
          variant="copy"
        />
        <Spacer space="2rem" />
        <TextAlignWrapper align="left">
          <Label htmlFor="encodedSecret">
            This is what your message looks like on our server. Pretty secure
            looking eh?:
          </Label>
        </TextAlignWrapper>
        <Input
          variant="disabled-light"
          id="encodedSecret"
          value="\4RÏÇmÄyÆFÕ¬Ð$CÑÓÃyÛ"
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

export default SecretCreationPage3;
