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

import img1 from "./homes-1.png";
import img2 from "./homes-2.png";
import img3 from "./homes-3.png";

const Homes = styled.section`
  position: relative;
`;
const CardTitle = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-weight: 700;
  padding-right: 5px;

  @media only screen and (min-width: 577px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;

  @media only screen and (min-width: 577px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Superhost = styled.span`
  font-size: 12px;
  line-height: 14px;
`;

export default () => {
  return (
    <Homes>
      <Title>
        Homes
        <SeeAll href="#">See all</SeeAll>
      </Title>
      <Grid>
        <Row>
          <HorizonScroll>
            <Col xs={6} md={5} lg={4}>
              <Link href="#">
                <Img src={img1} />
                <CardTitle>$82 La Salentina, see, nature & relax</CardTitle>
              </Link>
              <Description>Entire house &#183; 9 beds</Description>
              <StarList />
              <Superhost>97 &#183; Superhost</Superhost>
            </Col>
            <Col xs={6} md={5} lg={4}>
              <Link href="#">
                <Img src={img2} />
                <CardTitle>
                  $82 Your private 3 bedr. riad and exclusi...
                </CardTitle>
              </Link>
              <Description>Entire house &#183; 5 beds</Description> <StarList />
              <Superhost>161 &#183; Superhost</Superhost>
            </Col>
            <Col xs={6} md={5} lg={4}>
              <Link href="#">
                <Img src={img3} />
                <CardTitle>$200 Dreamy Tropical Tree House</CardTitle>
              </Link>
              <Description>Entire house &#183; 1 bed</Description>
              <StarList />
              <Superhost>364 &#183; Superhost</Superhost>
            </Col>
            <SliderArrow />
          </HorizonScroll>
        </Row>
      </Grid>
    </Homes>
  );
};
