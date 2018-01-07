import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Title, HorizonScroll } from "../ui";
import homesImg from "./Homes.png";
import experiencesImg from "./Experiences.png";
import restaurantsImg from "./Restaurants.png";

const Explore = styled.section``;

const CardTitle = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  padding-left: 12px;
  @media only screen and (min-width: 577px) {
    display: inline;
    font-size: 17px;
    line-height: 20px;
  }
`;

const Card = styled.a`
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  text-decoration: none;
  @media only screen and (max-width: 576px) {
    display: block;
  }
`;

const CardImage = styled.img`
  margin-right: 0;
  width: 100%;
  object-fit: cover;
  @media only screen and (min-width: 577px) {
    margin-right: 24px;
    width: 96px;
    height: 72px;
  }
`;

export default () => {
  return (
    <Explore>
      <Title>Explore Airbnb</Title>
      <Grid>
        <Row>
          <HorizonScroll>
            <Col xs={6} md={5} lg={4}>
              <Card href="#">
                <CardImage src={homesImg} alt="Homes" />
                <CardTitle>Homes</CardTitle>
              </Card>
            </Col>
            <Col xs={6} md={5} lg={4}>
              <Card href="#">
                <CardImage src={experiencesImg} alt="Experiences" />
                <CardTitle>Experiences</CardTitle>
              </Card>
            </Col>
            <Col xs={6} md={5} lg={4}>
              <Card href="#">
                <CardImage src={restaurantsImg} alt="Restaurants" />
                <CardTitle>Restaurants</CardTitle>
              </Card>
            </Col>
          </HorizonScroll>
        </Row>
      </Grid>
    </Explore>
  );
};
