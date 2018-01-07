import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Title, Img, SeeAll, SliderArrow, Link, HorizonScroll } from "../ui";
import img1 from "./reservations-1.png";
import img2 from "./reservations-2.png";
import img3 from "./reservations-3.png";
import img4 from "./reservations-4.png";

const Reservation = styled.section`
  position: relative;
`;

const CardName = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  margin: 0 0 4px 0;

  @media only screen and (min-width: 577px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const CardTitle = styled.span`
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 8px;
  line-height: 9px;
  @media only screen and (min-width: 577px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

const CardDescription = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  @media only screen and (min-width: 577px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export default () => {
  return (
    <Reservation>
      <Title>
        Popular reservation around the world
        <SeeAll href="#">See all</SeeAll>
      </Title>
      <Grid>
        <Row>
          <HorizonScroll>
            <Col xs={5} md={4} lg={3}>
              <Link href="#">
                <Img src={img1} />
                <CardTitle>SPEAKEASY</CardTitle>
                <CardName>Chumley's</CardName>
              </Link>
              <CardDescription>About $60 per person</CardDescription>
            </Col>
            <Col xs={5} md={4} lg={3}>
              <Link href="#">
                <Img src={img2} />
                <CardTitle>KOREAN GASTROPUB</CardTitle>
                <CardName>Hanjan</CardName>
              </Link>
              <CardDescription>About $50 per person</CardDescription>
            </Col>
            <Col xs={5} md={4} lg={3}>
              <Link href="#">
                <Img src={img3} />
                <CardTitle>GERMAN AMERICAN</CardTitle>
                <CardName>Prime Meats</CardName>
              </Link>
              <CardDescription>About $65 per person</CardDescription>
            </Col>
            <Col xs={5} md={4} lg={3}>
              <Link href="#">
                <Img src={img4} />
                <CardTitle>FINE SEAFOOD</CardTitle>
                <CardName>Seaprice</CardName>
              </Link>
              <CardDescription>About $70 per person</CardDescription>
            </Col>
            <SliderArrow />
          </HorizonScroll>
        </Row>
      </Grid>
    </Reservation>
  );
};
