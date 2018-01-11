import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";

const Pagination = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Switch = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Page = styled.span`
  padding: 6px 13px;
  margin-right: 14px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${props => (props.active ? "white" : "#0f7276")};
  background-color: ${props => props.active && "#0f7276"};
  border-radius: 16px;
  cursor: pointer;
`;

const Quantity = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 19px;
  color: #383838;
  text-align: center;
`;

const Next = styled.span`
  margin-left: 19.5px;
  border-radius: 16px;
  border: 1px solid #008489;
  padding: 5px 15.225px;
  background-image: url(${arrow});
  background-size: 5.55px 10px;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default () => {
  return (
    <Pagination>
      <Switch>
        <Page active>1</Page>
        <Page>2</Page>
        <Page>3</Page>
        <Page>...</Page>
        <Page>17</Page>
        <Next />
      </Switch>
      <Quantity>1 &mdash; 18 of 300+ Rentals</Quantity>
    </Pagination>
  );
};
