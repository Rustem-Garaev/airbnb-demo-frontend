import React from "react";
import styled from "styled-components";
import { Img, Link } from "../ui";

const Name = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  margin: 0 0 4px 0;

  @media only screen and (min-width: 577px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const Title = styled.span`
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 8px;
  line-height: 9px;
  @media only screen and (min-width: 577px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

const Description = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  @media only screen and (min-width: 577px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export default props => {
  return (
    <React.Fragment>
      <Link to={props.link}>
        <Img src={props.img} />
        <Title>{props.title}</Title>
        <Name>{props.name}</Name>
      </Link>
      <Description>About ${props.price} per person</Description>
    </React.Fragment>
  );
};
