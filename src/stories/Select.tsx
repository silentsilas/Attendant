import React, { FC } from "react";
import styled, { css } from "styled-components";
import CSS from "csstype";

import { typography, borderRadius, fontSize, padding } from "../shared/styles";

export interface SelectProps {
  style?: CSS.Properties;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ style, name, value, onChange }) => {
  return (
    <StyledSelect style={style} name={name} value={value} onChange={onChange}>
      <option value="github">Github</option>
      <option value="facebook">Facebook</option>
      <option value="Google">Google</option>
    </StyledSelect>
  );
};

export default Select;

const StyledSelect = styled.select<SelectProps>`
  font-size: ${fontSize.medium};
  font-family: ${typography.primary};
  font-weight: ${typography.weight.regular};

  padding: ${padding.medium};
  width: 100%;

  border: none;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: ${borderRadius.medium};
  appearance: none;

  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22black%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%20%2F%3E%0A%3C%2Fsvg%3E");

  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  /* background-position: right 1.2rem top 50%, 0 0 */
  background-position: right 1.4rem top 50%;
  /* icon size, then gradient */
  /* background-size: 3rem auto, 100%; */
  background-size: 2rem auto;

  &:focus-visible {
    outline: none;
  }
`;

/* 
const StyledSelect = styled.select<SelectProps>`
  border-radius: ${borderRadius.medium};
  border: none;
  padding: ${padding.medium};
  width: 100%;
  margin: 0.7rem auto;

  font-size: ${fontSize.medium};
  font-family: ${typography.primary};
  font-weight: ${typography.weight.regular};

  cursor: pointer;

  &:focus-visible {
    outline: none;
  }
`;
 */
