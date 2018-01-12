import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const List = styled.nav`
  display: none;
  @media only screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h5`
  margin: 0 0 19px 0;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  color: #383838;
  @media only screen and (min-width: 991px) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 16px;
  }
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 11px;
  color: #636363;
  @media only screen and (min-width: 991px) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 8px;
  }
`;
