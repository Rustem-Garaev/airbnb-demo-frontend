import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";

const Main = styled.main`
  padding-top: 72px;
`;

export default () => {
  return (
    <Grid>
      <Main>
        <Explore />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
      </Main>
    </Grid>
  );
};
