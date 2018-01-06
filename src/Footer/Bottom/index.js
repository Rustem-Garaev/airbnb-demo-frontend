import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import shape from "./shape.svg";
import twitter from "./twitter.svg";
import { Link as CommonLink } from "../common.js";

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
      <Row middle="xs">
        <Col xs={12} md={6} lg={6}>
          <Left>
            <Link href="#">
              <Img src={shape} />
            </Link>
            <Link href="#">&#169; Airbnb inc.</Link>
          </Left>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Right>
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Site map</Link>
            <Link href="#">
              <Img src={facebook} />
            </Link>
            <Link href="#">
              <Img src={twitter} />
            </Link>
            <Link href="#">
              <Img src={instagram} />
            </Link>
          </Right>
        </Col>
      </Row>
    </Bottom>
  );
};
