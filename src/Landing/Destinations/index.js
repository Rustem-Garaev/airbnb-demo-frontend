import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { Title, SliderArrow, HorizonScroll } from "../ui";
import Card from "./Card";

import img1 from "./destinations-1.png";
import img2 from "./destinations-2.png";
import img3 from "./destinations-3.png";
import img4 from "./destinations-4.png";
import img5 from "./destinations-5.png";
import img6 from "./destinations-6.png";

const Destinations = styled.section`
  position: relative;
`;

export default () => {
  return (
    <Destinations>
      <Title>Featured destinations</Title>
      <Row>
        <HorizonScroll>
          <Col xs={4} md={3} lg={2}>
            <Card link="#" img={img1} title="Paris" />
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Card link="#" img={img2} title="Miami" />
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Card link="#" img={img3} title="Tokyo" />
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Card link="#" img={img4} title="Cape town" />
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Card link="#" img={img5} title="Seoul" />
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Card link="#" img={img6} title="Los Angeles" />
          </Col>
          <SliderArrow />
        </HorizonScroll>
      </Row>
    </Destinations>
  );
};
