import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import shape from "./shape.svg";
import twitter from "./twitter.svg";
import { Link } from "../common";

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

const LinkExt = Link.extend`
  padding-right: 12px;
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

export default () => {
  return (
    <Bottom>
      <Row>
        <Col xs={12}>
          <Row middle="xs">
            <Col xs={12} md={3} lg={2}>
              <Left>
                <LinkExt href="#">
                  <Img src={shape} />
                </LinkExt>
                <LinkExt href="#">&#169; Airbnb inc.</LinkExt>
              </Left>
            </Col>
            <Col xs={12} md={6} mdOffset={3} lg={6} lgOffset={4}>
              <Right>
                <LinkExt href="#">Terms</LinkExt>
                <LinkExt href="#">Privacy</LinkExt>
                <LinkExt href="#">Site map</LinkExt>
                <LinkExt href="#">
                  <Img src={facebook} />
                </LinkExt>
                <LinkExt href="#">
                  <Img src={twitter} />
                </LinkExt>
                <LinkExt href="#">
                  <Img src={instagram} />
                </LinkExt>
              </Right>
            </Col>
          </Row>
        </Col>
      </Row>
    </Bottom>
  );
};
/*
 <Bottom>
      <Left>
        <LinkExt href="#">
          <Img src={shape} />
        </LinkExt>
        <LinkExt href="#">&#169; Airbnb inc.</LinkExt>
      </Left>
      <span>
        <LinkExt href="#">Terms</LinkExt>
        <LinkExt href="#">Privacy</LinkExt>
        <LinkExt href="#">Site map</LinkExt>
        <LinkExt href="#">
          <Img src={facebook} />
        </LinkExt>
        <LinkExt href="#">
          <Img src={instagram} />
        </LinkExt>
        <LinkExt href="#">
          <Img src={twitter} />
        </LinkExt>
      </span>
    </Bottom>
*/
