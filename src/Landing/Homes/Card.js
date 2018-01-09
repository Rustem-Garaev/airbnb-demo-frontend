import React from "react";
import styled from "styled-components";
import { Img, Link } from "../ui";
import StarList from "../StarList";

const Title = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-weight: 700;
  padding-right: 5px;

  @media only screen and (min-width: 577px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;

  @media only screen and (min-width: 577px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Superhost = styled.span`
  font-size: 12px;
  line-height: 14px;
`;

export default props => {
  return (
    <React.Fragment>
      <Link href={props.link}>
        <Img src={props.img} />
        <Title>
          ${props.price} {props.title}
        </Title>
      </Link>
      <Description>
        Entire house &#183;{" "}
        {props.bedCount + (props.bedCount > 1 ? " beds" : " bed")}
      </Description>
      <StarList count={props.starCount} />
      <Superhost>{props.superhost} &#183; Superhost</Superhost>
    </React.Fragment>
  );
};
