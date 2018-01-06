import styled from "styled-components";

export const List = styled.nav`
  display: none;
  @media only screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  padding-bottom: 19px;
  color: #383838;
  @media only screen and (min-width: 991px) {
    font-size: 15px;
    line-height: 18px;
    padding-bottom: 16px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  padding-bottom: 11px;
  color: #636363;
  @media only screen and (min-width: 991px) {
    font-size: 15px;
    line-height: 18px;
    padding-bottom: 8px;
  }
`;
