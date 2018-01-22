import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { Select } from "./Select";
import { List, Title, Link } from "./common";
import Bottom from "./Bottom";

const Footer = styled.footer`
  width: 100%;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 40px;
  padding-top: 16px;

  @media only screen and (min-width: 769px) {
    margin-top: 64px;
    padding-top: 48px;
  }
`;

const SelectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: 769px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col xs={12} md={3} lg={3}>
            <SelectsWrapper>
              <Select>
                <option>English</option>
                <option>Russian</option>
              </Select>
              <Select>
                <option>United States dollar</option>
                <option>Russian ruble</option>
              </Select>
            </SelectsWrapper>
          </Col>
          <Col md={2} mdOffset={1} lg={2} lgOffset={1}>
            <List>
              <Title>Airbnb</Title>
              <Link to="#">About us</Link>
              <Link to="#">Careers</Link>
              <Link to="#">Press</Link>
              <Link to="#">Policies</Link>
              <Link to="#">Help</Link>
              <Link to="#">Diversity & Belonging</Link>
            </List>
          </Col>
          <Col md={2} mdOffset={1} lg={2} lgOffset={1}>
            <List>
              <Title>Discover</Title>
              <Link to="#">Trust & Safety</Link>
              <Link to="#">Travel Credit</Link>
              <Link to="#">Gift Cards</Link>
              <Link to="#">Airbnb Citizen</Link>
              <Link to="#">Business Travel</Link>
              <Link to="#">Guidebooks</Link>
              <Link to="#">Airbnbmag</Link>
            </List>
          </Col>
          <Col md={2} mdOffset={1} lg={2} lgOffset={1}>
            <List>
              <Title>Hosting</Title>
              <Link to="#">Why Host</Link>
              <Link to="#">Hospitality</Link>
              <Link to="#">Responsible Hosting</Link>
              <Link to="#">Community Center</Link>
            </List>
          </Col>
        </Row>
        <Bottom />
      </Grid>
    </Footer>
  );
};
