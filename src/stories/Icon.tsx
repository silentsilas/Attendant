import React, { FC } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";
import { ReactSVG } from "react-svg";

type IconNames = "copy" | "download";

export interface IconProps {
  style?: CSS.Properties;
  iconName: IconNames;
  onClick: () => void;
}

const Icon: FC<IconProps> = ({ style, iconName, onClick }) => {
  const generateIcon = (iconName: IconNames) => {
    if (iconName === "download") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          height="3rem"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      );
    }

    if (iconName === "copy") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          height="3rem"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      );
    }
  };

  return (
    <StyledSpan iconName={iconName} onClick={onClick}>
      {generateIcon(iconName)}
    </StyledSpan>
  );
};

export default Icon;

const StyledSpan = styled.span<IconProps>`
  position: absolute;
  top: calc(50% - 1.5rem);
  right: 2rem;
  z-index: 100;

  width: 3rem;
  height: 3rem;
  font-size: 1.6rem;

  cursor: pointer;

  ${(props) =>
    props.iconName === "copy" &&
    css`
      color: black;
    `}

  ${(props) =>
    props.iconName === "download" &&
    css`
      color: white;
    `}
`;
