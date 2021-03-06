import React, { FC } from "react";
import styled, { css } from "styled-components";

interface IconArrowProps {
  arrowDirection: "left" | "right";
}

/* const StyledSpan = styled.span<IconArrowProps>`
  ${(props) =>
    props.arrowDirection === "left" &&
    css`
      transform: scale(-1, 1);
    `}
`;
 */
const IconArrow: FC<IconArrowProps> = ({ arrowDirection }) => {
  if (arrowDirection === "left") {
    return (
      <svg
        style={{ transform: "scale(-1,1)" }}
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 4.99996H0.5C0.3 4.99996 0 4.79996 0 4.49996V3.49996C0 3.19996 0.3 2.99996 0.5 2.99996H4V0.699961C4 -3.9041e-05 4.4 -0.200039 4.9 0.199961L9.6 3.39996C10.1 3.69996 10.1 4.29996 9.6 4.59996L4.9 7.79996C4.5 8.19996 4 7.99996 4 7.29996V4.99996Z"
            fill="#091132"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="10" height="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 4.99996H0.5C0.3 4.99996 0 4.79996 0 4.49996V3.49996C0 3.19996 0.3 2.99996 0.5 2.99996H4V0.699961C4 -3.9041e-05 4.4 -0.200039 4.9 0.199961L9.6 3.39996C10.1 3.69996 10.1 4.29996 9.6 4.59996L4.9 7.79996C4.5 8.19996 4 7.99996 4 7.29996V4.99996Z"
          fill="#091132"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="10" height="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { IconArrow };
