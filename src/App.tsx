import React from "react";

import ProgressIndicator from "./stories/ProgressIndicator";
import Header1 from "./stories/Header1";
import Header2 from "./stories/Header2";
import Button from "./stories/Button";

import CenteredContainer from "./stories/CenteredContainer";
import SpaceBetweenContainer from "./stories/SpaceBetweenContainer";
import Spacer from "./stories/Spacer";

function App() {
  return (
    <CenteredContainer fullscreen>
      <CenteredContainer wide>
        <ProgressIndicator current={3} />
        <Header1>Securely Share Your Secrets</Header1>
        <Spacer />
        <Header2>Tell someone</Header2>
        <Spacer />
        <SpaceBetweenContainer width100pct>
          <Button variant="secondary">Hello World</Button>
          <Button variant="secondary">Hello World</Button>
        </SpaceBetweenContainer>
      </CenteredContainer>
    </CenteredContainer>
  );
}

export default App;
