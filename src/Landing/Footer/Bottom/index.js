import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import logo from "./logo.svg";
import twitter from "./twitter.svg";
import { Link as CommonLink } from "../common";

const Bottom = styled.div`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 24px;
  line-height: 40px;
  padding: 12px 0;
  @media only screen and (min-width: 769px) {
    padding: 30px 0;
    margin-top: 27px;
  }
  @media only screen and (min-width: 991px) {
    margin-top: 40px;
  }
`;

const Link = CommonLink.extend`
  padding-right: 13px;
`;

const Img = styled.img`
  transform: translateY(25%);
`;

const Left = styled.nav``;

const Right = styled.nav`
  @media only screen and (min-width: 769px) {
    text-align: right;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  padding-right: 13px;
`;

export default () => {
  return (
    <Bottom>
      <Row middle="xs">
        <Col xs={12} md={6} lg={6}>
          <Left>
            <Link to="#">
              <Img src={logo} />
            </Link>
            <Link to="#">&#169; Airbnb inc.</Link>
          </Left>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Right>
            <Link to="#">Terms</Link>
            <Link to="#">Privacy</Link>
            <Link to="#">Site map</Link>
            <ExternalLink href="#">
              <Img src={facebook} />
            </ExternalLink>
            <ExternalLink href="#">
              <Img src={twitter} />
            </ExternalLink>
            <ExternalLink href="#">
              <Img src={instagram} />
            </ExternalLink>
          </Right>
        </Col>
      </Row>
    </Bottom>
  );
};
