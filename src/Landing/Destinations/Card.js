import React from "react";
import styled from "styled-components";
import { Img, Link } from "../ui";

const Title = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  @media only screen and (min-width: 577px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export default props => {
  return (
    <Link href={props.link}>
      <Img src={props.img} />
      <Title>{props.title}</Title>
    </Link>
  );
};
