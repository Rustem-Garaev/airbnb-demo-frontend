import React from "react";
import styled from "styled-components";
import arrowImg from "./arrow.svg";

const Arrow = styled.img`
  margin-left: 5px;
  width: 10px;
  height: 6px;

  @media only screen and (min-width: 769px) {
    margin-left: 8px;
  }

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export default () => {
  return <Arrow src={arrowImg} alt="Menu" />;
};
