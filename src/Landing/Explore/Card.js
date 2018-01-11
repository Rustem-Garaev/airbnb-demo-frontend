import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  padding-left: 12px;
  @media only screen and (min-width: 577px) {
    display: inline;
    font-size: 17px;
    line-height: 20px;
  }
`;

const Card = styled(Link)`
  display: block;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  text-decoration: none;
  @media only screen and (min-width: 577px) {
    display: flex;
  }
`;

const Image = styled.img`
  margin-right: 0;
  width: 100%;
  object-fit: cover;
  @media only screen and (min-width: 577px) {
    margin-right: 24px;
    width: 96px;
    height: 72px;
  }
`;

export default props => {
  return (
    <Card to={props.link}>
      <Image src={props.imgSrc} alt={props.imgAlt} />
      <Title>{props.title}</Title>
    </Card>
  );
};
