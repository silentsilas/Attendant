import React from "react";

import { SplashIconHeader } from "./stories/SplashIconHeader";

import { Header1 } from "./stories/Header1";
import { Header3 } from "./stories/Header3";

import { Button } from "./stories/Button";

import { CenteredContainer } from "./stories/utilities/CenteredContainer";
import { Spacer } from "./stories/utilities/Spacer";

const SplashPage = () => {
  return (
    <CenteredContainer fullscreen>
      <CenteredContainer wide>
        <SplashIconHeader />
        <Header1>Securely Share Your Secrets</Header1>
        <Header3>
          With Intended Link you can easily share messages and files securely
          and secretly.
        </Header3>
        <Spacer />
        <Button variant="secondary" boldFont onClick={() => {}}>
          START SHARING
        </Button>
      </CenteredContainer>
    </CenteredContainer>
  );
};

export default SplashPage;
