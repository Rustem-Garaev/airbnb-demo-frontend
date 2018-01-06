import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  Title,
  Img,
  SliderArrow,
  Link,
  HorizonScroll
} from "../generalElements";

import img1 from "./destinations-1.png";
import img2 from "./destinations-2.png";
import img3 from "./destinations-3.png";
import img4 from "./destinations-4.png";
import img5 from "./destinations-5.png";
import img6 from "./destinations-6.png";

const Destinations = styled.section`
  position: relative;
`;

const CardTitle = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  @media only screen and (min-width: 577px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export default () => {
  return (
    <Destinations>
      <Title>Featured destinations</Title>
      <Grid>
        <Row>
          <HorizonScroll>
            <Col xs={4} md={3} lg={2}>
              <Link href="#">
                <Img src={img1} />
                <CardTitle>Paris</CardTitle>
              </Link>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <Link href="#">
                <Img src={img2} />
                <CardTitle>Miami</CardTitle>
              </Link>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <Link href="#">
                <Img src={img3} />
                <CardTitle>Tokyo</CardTitle>
              </Link>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <Link href="#">
                <Img src={img4} />
                <CardTitle>Cape town</CardTitle>
              </Link>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <Link href="#">
                <Img src={img5} />
                <CardTitle>Seoul</CardTitle>
              </Link>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <Link href="#">
                <Img src={img6} />
                <CardTitle>Los Angeles</CardTitle>
              </Link>
            </Col>
            <SliderArrow />
          </HorizonScroll>
        </Row>
      </Grid>
    </Destinations>
  );
};
