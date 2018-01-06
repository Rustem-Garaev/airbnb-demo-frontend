import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Img = styled.img``;

export default () => {
  return <Img src={logo} alt="airbnb-logo" title="airbnb" />;
};
