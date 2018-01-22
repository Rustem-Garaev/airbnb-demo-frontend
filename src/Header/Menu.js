import React from "react";
import styled from "styled-components";

const Menu = styled.nav`
  text-align: right;

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  padding-left: 8px;
  font-weight: 400;
  margin: 0 6px;
  text-decoration: none;
  color: #383838;
  cursor: pointer;
`;

export default () => {
  return (
    <Menu>
      <Link href="Become a host">Become a host</Link>
      <Link href="Help">Help</Link>
      <Link href="Sign Up">Sign Up</Link>
      <Link href="Log In">Log In</Link>
    </Menu>
  );
};
