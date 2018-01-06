import React from "react";
import styled from "styled-components";
import icon from "./icon.svg";

const Input = styled.input`
  width: 100%;
  line-height: 48px;
  font-size: 14px;
  color: #383838;
  padding-left: 40px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  background-image: url(${icon});
  background-position: 10px center;
  background-repeat: no-repeat;
  opacity: 0.64;
  @media only screen and (min-width: 769px) {
    font-size: 16px;
  }
`;

export default () => {
  return <Input type="text" name="searchField" placeholder="Try “Miami”" />;
};
