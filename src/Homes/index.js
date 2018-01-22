import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Main as UiMain } from "../ui";
import styled from "styled-components";
import Filters from "./Filters";
import Card from "./Card";
import GoogleMap from "./GoogleMap";
import Pagination from "./Pagination";
import Footer from "./Footer";
import HiddenMap from "./HiddenMap";
import { Helmet } from "react-helmet";

import img1 from "./homes1.png";
import img2 from "./homes2.png";
import img3 from "./homes3.png";
import img4 from "./homes4.png";
import img5 from "./homes5.png";
import img6 from "./homes6.png";

const Main = UiMain.extend`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 160px;
  justify-content: space-between;
  @media only screen and (min-width: 577px) {
    flex-direction: row;
  }
`;

const Box = styled.div`
  margin-bottom: 24px;
  @media only screen and (min-width: 577px) {
    width: 48%;
    margin-bottom: 40px;
  }
`;

export default () => {
  return (
    <Grid>
      <Helmet>
        <title>Homes</title>
      </Helmet>
      <Filters />
      <Row>
        <Col xs={12} md={12} lg={8}>
          <Main>
            <Box>
              <Card
                to="#"
                img={img1}
                price="82"
                title="La Salentina, see, nature & relax"
                bedCount={9}
                superhost={97}
                starCount={5}
              />
            </Box>
            <Box>
              <Card
                to="#"
                img={img2}
                price="82"
                title="Your private 3 bedr. riad and exclusi..."
                bedCount={5}
                superhost={161}
                starCount={5}
              />
            </Box>
            <Box>
              <Card
                to="#"
                img={img3}
                price="200"
                title="Dreamy Tropical Tree House"
                bedCount={1}
                superhost={364}
                starCount={5}
              />
            </Box>
            <Box>
              <Card
                to="#"
                img={img4}
                price="110"
                title="Best location old town luxury loft"
                bedCount={1}
                superhost={369}
                starCount={5}
              />
            </Box>
            <Box>
              <Card
                to="#"
                img={img5}
                price="83"
                title="Lussuoso. Vista incantevole."
                bedCount={6}
                superhost={105}
                starCount={5}
              />
            </Box>
            <Box>
              <Card
                to="#"
                img={img6}
                price="72"
                title="In the historical center of Lecce"
                bedCount={1}
                superhost={221}
                starCount={5}
              />
            </Box>
          </Main>
          <Pagination />
          <Footer />
        </Col>
      </Row>
      <GoogleMap />
      <HiddenMap />
    </Grid>
  );
};
