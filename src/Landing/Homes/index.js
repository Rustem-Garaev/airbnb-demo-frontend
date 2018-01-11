import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Title, SeeAll, SliderArrow, HorizonScroll } from "../ui";
import Card from "../../Homes/Card";

import img1 from "./homes-1.png";
import img2 from "./homes-2.png";
import img3 from "./homes-3.png";

const Homes = styled.section`
  position: relative;
`;

export default () => {
  return (
    <Homes>
      <Title>
        Homes
        <SeeAll to="/homes">See all</SeeAll>
      </Title>
      <Grid>
        <Row>
          <HorizonScroll>
            <Col xs={6} md={5} lg={4}>
              <Card
                link="#"
                img={img1}
                price="82"
                title="La Salentina, see, nature & relax"
                bedCount={9}
                superhost={97}
                starCount={5}
              />
            </Col>
            <Col xs={6} md={5} lg={4}>
              <Card
                link="#"
                img={img2}
                price="82"
                title="Your private 3 bedr. riad and exclusi..."
                bedCount={5}
                superhost={161}
                starCount={5}
              />
            </Col>
            <Col xs={6} md={5} lg={4}>
              <Card
                link="#"
                img={img3}
                price="200"
                title="Dreamy Tropical Tree House"
                bedCount={1}
                superhost={364}
                starCount={5}
              />
            </Col>
            <SliderArrow />
          </HorizonScroll>
        </Row>
      </Grid>
    </Homes>
  );
};
