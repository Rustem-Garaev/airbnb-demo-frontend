import React from "react";
import { Grid } from "react-flexbox-grid";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "./Footer";
import { Main } from "../ui";

export default () => {
  return (
    <React.Fragment>
      <Grid>
        <Main>
          <Explore />
          <Experiences />
          <Homes />
          <Reservations />
          <Destinations />
        </Main>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};
