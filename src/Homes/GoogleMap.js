import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Container = styled.div`
  display: none;
  @media only screen and (min-width: 992px) {
    display: block;
    position: fixed;
    width: 34%;
    height: calc(100% - 136px);
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  @media only screen and (min-width: 1400px) {
    width: 36%;
  }
  @media only screen and (min-width: 1600px) {
    width: 38%;
  }
`;

export default () => {
  return (
    <Container>
      <GoogleMapReact
        defaultCenter={{ lat: 55.828591, lng: 49.070102 }}
        defaultZoom={12}
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_KEY,
          language: "ru"
        }}
      />
    </Container>
  );
};
