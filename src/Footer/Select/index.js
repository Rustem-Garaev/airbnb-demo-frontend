import styled from "styled-components";
import arrowDown from "./arrowDown.svg";

export const Select = styled.select`
  width: 100%;
  appearance: none;
  background: url(${arrowDown}) no-repeat 95% center;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  color: #383838;

  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  padding: 12px 8px;

  @media only screen and (min-width: 769px) {
    font-size: 15px;
    line-height: 18px;
    padding: 15px 8px 14px 8px;
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 991px) {
    font-size: 18px;
    line-height: 21px;
    padding: 12px 16px 13px 16px;
  }
`;
