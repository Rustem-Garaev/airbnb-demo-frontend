import React from "react";
import styled from "styled-components";
import star from "./star.png";

const StarsList = styled.span`
  display: inline-block;
  margin-right: 4px;
`;

const Star = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-image: url(${star});
  background-size: cover;
`;

export default () => {
  return (
    <StarsList>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </StarsList>
  );
};
