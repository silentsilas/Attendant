import React, { useState } from "react";

import ProgressIndicator from "./stories/ProgressIndicator";

import Header2 from "./stories/Header2";

import Button from "./stories/Button";
import IconArrow from "./stories/IconArrow";

import Label from "./stories/Label";
import FileInput from "./stories/FileInput";
import TextArea from "./stories/TextArea";

import CenteredContainer from "./stories/utilities/CenteredContainer";
import Spacer from "./stories/utilities/Spacer";
import TextAlignWrapper from "./stories/utilities/TextAlignWrapper";

const SecretCreationPage1 = () => {
  const [secretInput, setSecretInput] = useState("");
  const [fileInput, setFileInput] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSecretInput(e.target.value);
  };

  const handleFile = (file: File) => {
    setFileInput(file);

    setFileName(file.name);
  };

  return (
    <CenteredContainer fullscreen>
      <CenteredContainer>
        <ProgressIndicator currentProgress={1} />
        <Header2>Create a secret</Header2>
        <TextAlignWrapper align="left">
          <Label htmlFor="secretInput">Enter your secret here</Label>
        </TextAlignWrapper>
        <TextArea
          id="secretInput"
          value={secretInput}
          onChange={handleChange}
          placeholder="Tell me your secrets"
        />
        <Spacer space="2rem" />
        <TextAlignWrapper align="center">
          <Label htmlFor="fileInput">OR</Label>
        </TextAlignWrapper>
        <Spacer space="1.6rem" />
        <FileInput id="fileInput" value={fileName} handleFile={handleFile} />
        <Spacer space="4rem" />
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Button variant="secondary" onClick={() => {}}>
            <IconArrow arrowDirection="right" />
          </Button>
        </div>
      </CenteredContainer>
    </CenteredContainer>
  );
};

export default SecretCreationPage1;
