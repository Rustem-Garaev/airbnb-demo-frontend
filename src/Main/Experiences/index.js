import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  Title,
  Img,
  SeeAll,
  SliderArrow,
  Link,
  HorizonScroll
} from "../generalElements";
import StarList from "../StarList";

import img1 from "./experiences-1.png";
import img2 from "./experiences-2.png";
import img3 from "./experiences-3.png";
import img4 from "./experiences-4.png";

const Experiences = styled.section`
  position: relative;
`;

const Price = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-weight: 700;
  padding-right: 5px;

  @media only screen and (min-width: 576px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const CardTitle = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-weight: 300;
  @media only screen and (min-width: 577px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Reviews = styled.span`
  font-size: 12px;
  line-height: 14px;
`;

export default () => {
  return (
    <Experiences>
      <Title>
        Experiences
        <SeeAll href="#">See all</SeeAll>
      </Title>
      <Grid>
        <Row>
          <HorizonScroll>
            <Col xs={6} md={4} lg={3}>
              <Link href="#">
                <Img src={img1} />
                <Price>$29</Price>
                <CardTitle>Forest therapy</CardTitle>
              </Link>
              <StarList />
              <Reviews>44 reviews</Reviews>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <Link href="#">
                <Img src={img2} />
                <Price>$69</Price>
                <CardTitle>Whale watching</CardTitle>
              </Link>
              <StarList />
              <Reviews>46 reviews</Reviews>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <Link href="#">
                <Img src={img3} />
                <Price>$69</Price>
                <CardTitle>Table Mountain Summit, Cable Car Down</CardTitle>
              </Link>
              <StarList />
              <Reviews>44 reviews</Reviews>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <Link href="#">
                <Img src={img4} />
                <Price>$50</Price>
                <CardTitle>Salsa Night</CardTitle>
              </Link>
              <StarList />
              <Reviews>44 reviews</Reviews>
            </Col>
            <SliderArrow />
          </HorizonScroll>
        </Row>
      </Grid>
    </Experiences>
  );
};
