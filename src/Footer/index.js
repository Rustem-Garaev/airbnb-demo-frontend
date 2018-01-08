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
              <Link href="#">About us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Press</Link>
              <Link href="#">Policies</Link>
              <Link href="#">Help</Link>
              <Link href="#">Diversity & Belonging</Link>
            </List>
          </Col>
          <Col md={2} mdOffset={1} lg={2} lgOffset={1}>
            <List>
              <Title>Discover</Title>
              <Link href="#">Trust & Safety</Link>
              <Link href="#">Travel Credit</Link>
              <Link href="#">Gift Cards</Link>
              <Link href="#">Airbnb Citizen</Link>
              <Link href="#">Business Travel</Link>
              <Link href="#">Guidebooks</Link>
              <Link href="#">Airbnbmag</Link>
            </List>
          </Col>
          <Col md={2} mdOffset={1} lg={2} lgOffset={1}>
            <List>
              <Title>Hosting</Title>
              <Link href="#">Why Host</Link>
              <Link href="#">Hospitality</Link>
              <Link href="#">Responsible Hosting</Link>
              <Link href="#">Community Center</Link>
            </List>
          </Col>
        </Row>
        <Bottom />
      </Grid>
    </Footer>
  );
};
