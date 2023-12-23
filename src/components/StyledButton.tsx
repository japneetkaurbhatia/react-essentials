import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
  onClick: () => Promise<boolean>;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: #2980b9;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;

  &:hover {
    background-color: #9bcdff;
  }
`;

export default StyledButton;
