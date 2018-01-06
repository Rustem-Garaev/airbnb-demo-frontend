import React from "react";
import styled from "styled-components";
import ShapeImg from "./shape.svg";

const Shape = styled.img`
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
  return <Shape src={ShapeImg} alt="Shape" />;
};
