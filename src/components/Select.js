import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.elementBackground};
  color: ${({ theme }) => theme.color};
  box-shadow: 0 2px 20px 0px rgba(0, 0, 0, 0.15);
  border: none;
  padding: 1.5rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

Select.Wrapper = styled.div`
  position: relative;
  @media (min-width: 768px) {
    width: 20vw;
  }
`;

Select.Trigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Select.Options = styled.div`
  position: absolute;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.elementBackground};
  color: ${({ theme }) => theme.color};
  box-shadow: 0 2px 20px 0px rgba(0, 0, 0, 0.15);
  border: none;
  font-size: 1rem;
  display: ${({ isToggled }) => (isToggled ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
`;

Select.Option = styled.span`
  padding: 1rem;
  display: block;
  cursor: pointer;
  &:last-of-type {
    margin-bottom: 0;
  }
  &:hover {
    background: ${({ theme }) => theme.elementBackground};
    border-radius: 0.5rem;
  }
`;

const SelectIcon = styled.svg`
  height: 20px;
  width: 20px;
  margin-right: 0.5rem;
  path {
    fill: ${({ theme }) => theme.color};
  }
`;

export default ({ handleClick, filter }) => {
  const [isToggled, setToggle] = useState(false);

  return (
    <Select.Wrapper>
      <Select
        onClick={() => {
          setToggle(!isToggled);
        }}
      >
        <Select.Trigger>
          <span>{filter ? filter : "Filter by Region"}</span>
          <SelectIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </SelectIcon>
        </Select.Trigger>
      </Select>
      <Select.Options isToggled={isToggled}>
        <Select.Option onClick={handleClick}>Africa</Select.Option>
        <Select.Option onClick={handleClick}>Americas</Select.Option>
        <Select.Option onClick={handleClick}>Asia</Select.Option>
        <Select.Option onClick={handleClick}>Europe</Select.Option>
        <Select.Option onClick={handleClick}>Oceania</Select.Option>
      </Select.Options>
    </Select.Wrapper>
  );
};
