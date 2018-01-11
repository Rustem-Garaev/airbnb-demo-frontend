import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Title, SeeAll, SliderArrow, HorizonScroll } from "../ui";
import Card from "./Card";
import img1 from "./reservations-1.png";
import img2 from "./reservations-2.png";
import img3 from "./reservations-3.png";
import img4 from "./reservations-4.png";

const Reservation = styled.section`
  position: relative;
`;

export default () => {
  return (
    <Reservation>
      <Title>
        Popular reservation around the world
        <SeeAll to="#">See all</SeeAll>
      </Title>
      <Grid>
        <Row>
          <HorizonScroll>
            <Col xs={5} md={4} lg={3}>
              <Card
                link="#"
                img={img1}
                title="SPEAKEASY"
                name="Chumley's"
                price={60}
              />
            </Col>
            <Col xs={5} md={4} lg={3}>
              <Card
                link="#"
                img={img2}
                title="KOREAN GASTROPUB"
                name="Hanjan"
                price={50}
              />
            </Col>
            <Col xs={5} md={4} lg={3}>
              <Card
                link="#"
                img={img3}
                title="GERMAN AMERICAN"
                name="Prime Meats"
                price={65}
              />
            </Col>
            <Col xs={5} md={4} lg={3}>
              <Card
                link="#"
                img={img4}
                title="FINE SEAFOOD"
                name="Seaprice"
                price={70}
              />
            </Col>
            <SliderArrow />
          </HorizonScroll>
        </Row>
      </Grid>
    </Reservation>
  );
};
