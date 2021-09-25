import React, { ChangeEvent, FC, useRef } from "react";
import CSS from "csstype";

import InputButtonWithIcon from "./InputButtonWithIcon";

export interface FileInputProps {
  style?: CSS.Properties;
  id: string;
  handleFile: (arg0: File) => void;
  value: string | undefined;
}

const FileInput: FC<FileInputProps> = ({ style, id, handleFile, value }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput.current !== null) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    handleFile(file);
  };

  const displayValue = value ? value : "Upload a secret file";

  return (
    <>
      <InputButtonWithIcon
        variant="fileinput"
        id={id}
        value={displayValue}
        onClick={handleClick}
      />
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};

export default FileInput;
