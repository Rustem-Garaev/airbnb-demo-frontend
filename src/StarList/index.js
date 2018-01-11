import React from "react";
import styled from "styled-components";
import star from "./star.svg";

const StarsList = styled.span`
  display: inline-block;
`;

const Star = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-image: url(${star});
  background-size: cover;
`;

export default ({ count = 0 }) => {
  const stars = [];
  for (let i = 0; i < count; ++i) {
    stars.push(<Star key={i.toString()} />);
  }

  return <StarsList>{stars}</StarsList>;
};
