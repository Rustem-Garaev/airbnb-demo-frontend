import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  margin: 14px 0 88px;
  text-align: center;
  color: #636363;
  font-size: 16px;
  line-height: 19px;
  @media only screen and (min-width: 577px) {
    margin: 30px 0 24px;
  }
  @media only screen and (min-width: 769px) {
    margin: 29px 0 25px;
  }
`;

export default () => {
  return (
    <Footer>
      Enter dates to see full pricing. Additional fees apply. Taxes may be
      added.
    </Footer>
  );
};
