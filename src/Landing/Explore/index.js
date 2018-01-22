import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { Title, HorizonScroll } from "../ui";
import Card from "./Card";
import homesImg from "./Homes.png";
import experiencesImg from "./Experiences.png";
import restaurantsImg from "./Restaurants.png";

const Explore = styled.section``;

export default () => {
  return (
    <Explore>
      <Title>Explore Airbnb</Title>
      <Row>
        <HorizonScroll>
          <Col xs={6} md={5} lg={4}>
            <Card to="/homes" imgSrc={homesImg} imgAlt="Homes" title="Homes" />
          </Col>
          <Col xs={6} md={5} lg={4}>
            <Card
              to="#"
              imgSrc={experiencesImg}
              imgAlt="Experiences"
              title="Experiences"
            />
          </Col>
          <Col xs={6} md={5} lg={4}>
            <Card
              to="#"
              imgSrc={restaurantsImg}
              imgAlt="Restaurants"
              title="Restaurants"
            />
          </Col>
        </HorizonScroll>
      </Row>
    </Explore>
  );
};
