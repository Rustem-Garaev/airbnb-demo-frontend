import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Img = styled.img``;

export default () => {
  return (
    <Link to="/">
      <Img src={logo} alt="airbnb-logo" title="airbnb" />
    </Link>
  );
};
