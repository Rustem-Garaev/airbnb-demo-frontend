import React from "react";
import styled from "styled-components";

import { Img, Link } from "../ui";
import StarList from "../../StarList";

const Title = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-weight: 300;
  @media only screen and (min-width: 577px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
const Price = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-weight: 700;
  padding-right: 5px;

  @media only screen and (min-width: 577px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Reviews = styled.span`
  font-size: 12px;
  line-height: 14px;
`;

export default ({ to, img, price, title, stars, reviews }) => {
  return (
    <React.Fragment>
      <Link to={to}>
        <Img src={img} />
        <Price>{"$" + price}</Price>
        <Title>{title}</Title>
      </Link>
      <StarList count={stars} />
      <Reviews>
        {reviews + (reviews > 1 || reviews === 0 ? " reviews" : " review")}
      </Reviews>
    </React.Fragment>
  );
};
