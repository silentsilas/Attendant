import React from "react";

import Header2 from "./stories/Header2";
import Header3 from "./stories/Header3";

import Button from "./stories/Button";

import Label from "./stories/Label";
import Input from "./stories/Input";

import CenteredContainer from "./stories/utilities/CenteredContainer";
import Spacer from "./stories/utilities/Spacer";
import TextAlignWrapper from "./stories/utilities/TextAlignWrapper";

const VerifyPage = () => {
  return (
    <CenteredContainer fullscreen>
      <CenteredContainer>
        <Header2 style={{ margin: ".4rem" }}>Someone sent you a secret</Header2>
        <Header3 small>
          Please verify your identity to reveal this message.
        </Header3>
        <Spacer space="3rem" />
        <TextAlignWrapper align="left">
          <Label htmlFor="usernameEmail">Username / Email</Label>
        </TextAlignWrapper>
        <Input
          variant="disabled-medium"
          id="usernameEmail"
          value="adam@level2d.com"
        />
        <Spacer space="3rem" />
        <TextAlignWrapper align="left">
          <Label htmlFor="service">Service</Label>
        </TextAlignWrapper>
        <Input variant="disabled-medium" id="service" value="Gmail" />
        <Spacer space="3rem" />
        <Button variant="primary" wide onClick={() => {}}>
          Verify
        </Button>
      </CenteredContainer>
    </CenteredContainer>
  );
};

export default VerifyPage;
