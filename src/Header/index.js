import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Logo from "./Logo";
import Shape from "./Shape";
import SearchField from "./SearchField";
import Menu from "./Menu";

const Header = styled.header`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 16px 0;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Row middle="xs">
          <Col xs={2} md={1} lg={1}>
            <Wrapper>
              <Logo />
              <Shape />
            </Wrapper>
          </Col>
          <Col xs={10} md={5} lg={5}>
            <SearchField />
          </Col>
          <Col lg={6}>
            <Menu />
          </Col>
        </Row>
      </Grid>
    </Header>
  );
};
