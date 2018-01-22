import React from "react";
import styled from "styled-components";
import arrowRight from "./arrowRight.svg";
import close from "./close.svg";
import ScrollLock from "react-scrolllock";
import moment from "moment";

function dateToString(date) {
  return date && moment(date).format("Do MMM");
}

const Header = styled.div`
  display: flex;
  height: 48px;
  margin: 5px 8px 35px;
  justify-content: space-between;
  align-items: center;
`;

const ArrowRight = styled.span`
  display: inline-block;
  margin: 0 6px;
  width: 18px;
  height: 11px;
  background-image: url(${arrowRight});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

const Close = styled.button`
  width: 16px;
  height: 16px;
  background: url(${close});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #383838;
  font-weight: 700;
`;

const Reset = styled.button`
  padding: 0;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: #0f7276;
  border: none;
  background: white;
  cursor: pointer;
`;

const DateBtn = styled.button`
  line-height: 21px;
  font-size: 18px;
  padding: 0;
  margin: 0 8px;
  border: none;
  background: white;
  cursor: pointer;
  color: ${props => (props.selected ? "#0f7276" : "#636363")};
  border-bottom: ${props => (props.selected ? "1px solid #008489" : "none")};
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 8px;
  left: 8px;
  right: 8px;
  z-index: 10;
  background-color: white;
`;
const Save = styled.button`
  border-radius: 4px;
  background-color: #ff5a5f;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  color: white;
  line-height: 21px;
  font-weight: 700;
  border: none;

  :hover {
    background-color: #f53d43;
  }

  :active {
    background-color: #ed262c;
  }
`;

export default ({
  cancelClick,
  resetClick,
  saveClick,
  focusedInput,
  startDate,
  endDate,
  changeFocusedInput
}) => {
  return (
    <React.Fragment>
      <ScrollLock />
      <Header>
        <Close onClick={cancelClick} />
        <Title>Dates</Title>
        <Reset onClick={resetClick}>Reset</Reset>
      </Header>
      <DateBtn
        onClick={() => {
          changeFocusedInput("startDate");
        }}
        selected={focusedInput === "startDate"}
      >
        {dateToString(startDate) || "Check-in"}
      </DateBtn>
      <ArrowRight />
      <DateBtn
        onClick={() => {
          changeFocusedInput("endDate");
        }}
        selected={focusedInput === "endDate"}
      >
        {dateToString(endDate) || "Check-out"}
      </DateBtn>
      <Bottom>
        <Save onClick={saveClick}>Save</Save>
      </Bottom>
    </React.Fragment>
  );
};
