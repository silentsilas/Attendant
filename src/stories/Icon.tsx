import React, { FC } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";

type IconNames = "copy" | "download" | "fileinput";

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
          width="2rem"
          height="2rem"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.5 6H14.5C14.2 6 14 6.2 14 6.5V12H2V6.5C2 6.2 1.8 6 1.5 6H0.5C0.2 6 0 6.2 0 6.5V13C0 13.6 0.4 14 1 14H15C15.6 14 16 13.6 16 13V6.5C16 6.2 15.8 6 15.5 6Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.70015 9.8C7.90015 10 8.20015 10 8.30015 9.8L10.9001 6.5C11.1001 6.3 11.0001 6 10.7001 6H9.00015V0.5C9.00015 0.2 8.80015 0 8.50015 0H7.50015C7.20015 0 7.00015 0.2 7.00015 0.5V6H5.30015C5.00015 6 4.90015 6.3 5.10015 6.5L7.70015 9.8Z"
            fill="white"
          />
        </svg>
      );
    }

    if (iconName === "copy") {
      return (
        <svg
          width="2rem"
          height="2rem"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.6 3.6L10.3 0.3C10.2 0.2 9.8 0 9.5 0H1C0.4 0 0 0.4 0 1V15C0 15.6 0.4 16 1 16H13C13.6 16 14 15.6 14 15V4.5C14 4.2 13.8 3.8 13.6 3.6ZM12 14H2V2H8V5.5C8 5.8 8.2 6 8.5 6H12V14Z"
            fill="#091132"
          />
        </svg>
      );
    }

    if (iconName === "fileinput") {
      return (
        <svg
          width="2rem"
          height="2rem"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M5.3 15.6C4 15.6 2.6 15 1.6 14C0.6 13 0 11.6 0 10.2C0 8.79998 0.6 7.39998 1.6 6.39998L6.9 1.09998C8.4 -0.400024 10.8 -0.400024 12.3 1.09998C13.8 2.59998 13.8 4.99998 12.3 6.49998L7 11.9C6.1 12.8 4.6 12.8 3.7 11.9C2.8 11 2.8 9.49998 3.7 8.59998L9 3.19998C9.3 2.89998 9.9 2.89998 10.2 3.19998C10.5 3.49998 10.5 4.09998 10.2 4.39998L4.9 9.79998C4.6 10.1 4.6 10.5 4.9 10.7C5.2 11 5.6 11 5.8 10.7L11.1 5.39998C11.9 4.59998 11.9 3.19998 11.1 2.39998C10.3 1.59998 8.9 1.59998 8.1 2.39998L2.8 7.59998C2.1 8.29998 1.7 9.19998 1.7 10.2C1.7 11.2 2.1 12.1 2.8 12.8C4.2 14.2 6.5 14.2 8 12.8L15.4 5.39998C15.7 5.09998 16.3 5.09998 16.6 5.39998C16.9 5.69998 16.9 6.29998 16.6 6.59998L8.8 14.4C7.8 15.2 6.6 15.6 5.3 15.6Z"
              fill="#091132"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="16.8" height="15.6" fill="white" />
            </clipPath>
          </defs>
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

export { Icon };

const StyledSpan = styled.span<IconProps>`
  position: absolute;
  top: calc(50% - 1rem);
  right: 1.5rem;
  z-index: 100;

  width: 3rem;
  height: 3rem;
  font-size: 1.6rem;

  cursor: pointer;

  color: black;

  ${(props) =>
    props.iconName === "download" &&
    css`
      color: white;
    `}
`;
