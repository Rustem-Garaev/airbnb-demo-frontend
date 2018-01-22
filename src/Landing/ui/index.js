import styled from "styled-components";
import arrowRight from "./arrow-right.svg";
import { Link as RouterLink } from "react-router-dom";

export const Title = styled.h1`
  position: relative;
  margin-top: 48px;
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #383838;
  padding-right: 65px;

  @media only screen and (min-width: 577px) {
    font-size: 32px;
    line-height: 34px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 8px;
`;

export const SliderArrow = styled.button`
  display: none;
  position: absolute;
  top: calc(50% - 20px);
  right: -15px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  background-image: url(${arrowRight});
  background-repeat: no-repeat;
  background-size: 10px 18px;
  background-position: center center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 5px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  cursor: pointer;
  @media only screen and (min-width: 991px) {
    display: inline-block;
  }
`;

export const SeeAll = styled(RouterLink)`
  position: absolute;
  bottom: 0;
  right: 20px;
  padding-right: 12px;
  font-size: 12px;
  line-height: 24px;
  background-image: url(${arrowRight});
  background-repeat: no-repeat;
  background-size: 5.55px 20px;
  background-position: right 0px center;
  text-decoration: none;
  font-weight: 400;
  @media only screen and (min-width: 991px) {
    font-size: 14px;
  }
`;

export const Link = styled(RouterLink)`
  display: block;
  text-decoration: none;
`;

export const HorizonScroll = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  padding-bottom: 1px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
