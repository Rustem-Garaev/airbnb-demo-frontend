import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

const Header = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  height: 56px;
  background: white;
`;

const Button = styled.button`
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  padding: 7px 16px;
  margin: 12px 12px 12px 0;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  color: #383838;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.2s;
  &:hover {
    background-color: #008489;
  }
`;

const DesktopButton = Button.extend`
  display: none;
  @media only screen and (min-width: 992px) {
    display: inline-block;
  }
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Button>Dates</Button>
        <Button>Guests</Button>
        <DesktopButton>Room type</DesktopButton>
        <DesktopButton>Price</DesktopButton>
        <DesktopButton>Instant book</DesktopButton>
        <Button>More Filters</Button>
      </Grid>
    </Header>
  );
};
