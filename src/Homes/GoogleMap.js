import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Container = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: fixed;
    width: 34%;
    height: calc(100% - 136px);
    right: 0;
    bottom: 0;
  }
`;

export default () => {
  return (
    <Container>
      <GoogleMapReact
        defaultCenter={{ lat: 55.828591, lng: 49.070102 }}
        defaultZoom={12}
        bootstrapURLKeys={{
          key: "AIzaSyDcfRRDrYJTLbR5wJM-JvotvN2ImlVF9sw",
          language: "ru"
        }}
      />
    </Container>
  );
};
