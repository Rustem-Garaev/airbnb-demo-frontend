import React from "react";
import styled from "styled-components";

import icon from "./icon.svg";

const Icon = styled.span`
  position: fixed;
  bottom: 24px;
  right: 8px;
  background-image: url(${icon});
  background-size: 15.31px 19.06px;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border: 1px solid rgba(72, 72, 72, 0.16);
  background-color: white;
  z-index: 5;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export default () => {
  return <Icon />;
};
