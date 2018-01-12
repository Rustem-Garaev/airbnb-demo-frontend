import React from "react";
import styled from "styled-components";
import times from "lodash/times";
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
  return <StarsList>{times(count, id => <Star key={id} />)}</StarsList>;
};
