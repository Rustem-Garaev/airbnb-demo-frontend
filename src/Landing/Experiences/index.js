import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Title, SeeAll, SliderArrow, HorizonScroll } from "../ui";
import Card from "./Card";

import img1 from "./experiences-1.png";
import img2 from "./experiences-2.png";
import img3 from "./experiences-3.png";
import img4 from "./experiences-4.png";

const Experiences = styled.section`
  position: relative;
`;

export default () => {
  return (
    <Experiences>
      <Title>
        Experiences
        <SeeAll to="#">See all</SeeAll>
      </Title>
      <Grid>
        <Row>
          <HorizonScroll>
            <Col xs={6} md={4} lg={3}>
              <Card
                link={"#"}
                img={img1}
                price={29}
                title={"Forest therapy"}
                stars={5}
                reviews={44}
              />
            </Col>
            <Col xs={6} md={4} lg={3}>
              <Card
                link={"#"}
                img={img2}
                price={69}
                title={"Whale watching"}
                stars={5}
                reviews={46}
              />
            </Col>
            <Col xs={6} md={4} lg={3}>
              <Card
                link={"#"}
                img={img3}
                price={69}
                title={"Table Mountain Summit, Cable Car Down"}
                stars={5}
                reviews={44}
              />
            </Col>
            <Col xs={6} md={4} lg={3}>
              <Card
                link={"#"}
                img={img4}
                price={50}
                title={"Salsa Night"}
                stars={5}
                reviews={44}
              />
            </Col>
            <SliderArrow />
          </HorizonScroll>
        </Row>
      </Grid>
    </Experiences>
  );
};
