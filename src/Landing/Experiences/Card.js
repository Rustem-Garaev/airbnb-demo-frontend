import React from "react";
import styled from "styled-components";

import { Img, Link } from "../ui";
import StarList from "../StarList";

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

export default props => {
  return (
    <React.Fragment>
      <Link href={props.link}>
        <Img src={props.img} />
        <Price>{"$" + props.price}</Price>
        <Title>{props.title}</Title>
      </Link>
      <StarList count={props.stars} />
      <Reviews>
        {props.reviews +
          (props.reviews > 1 || props.reviews === 0 ? " reviews" : " review")}
      </Reviews>
    </React.Fragment>
  );
};
