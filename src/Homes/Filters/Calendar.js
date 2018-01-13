import React from "react";
import styled from "styled-components";
import "react-dates/initialize";
import "./react_dates_overrides.css";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";
import arrowRight from "./arrowRight.svg";
import exit from "./exit.svg";
import ScrollLock from "react-scrolllock";

const matchesXs = matchMedia("(min-width: 577px)").matches;
const matchesMd = matchMedia("(min-width: 769px)").matches;
const matchesLg = matchMedia("(min-width: 992px)").matches;

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

const Exit = styled.button`
  width: 16px;
  height: 16px;
  background: url(${exit});
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

export default class extends React.Component {
  state = {
    focusedInput: this.props.autoFocusEndDate ? "endDate" : "startDate"
  };

  handleFocusChange = focusedInput => {
    this.setState({
      focusedInput: focusedInput || "startDate"
    });
  };

  changeFocusedInput = input => {
    this.setState({ focusedInput: input });
  };

  render() {
    const numberOfMonths = matchesLg ? 2 : matchesMd ? 1 : 12;
    const { focusedInput } = this.state;
    const {
      startDate,
      endDate,
      dateChange,
      cancelClick,
      resetClick,
      saveClick
    } = this.props;
    return (
      <React.Fragment>
        {!matchesXs && (
          <React.Fragment>
            <ScrollLock />
            <Header>
              <Exit onClick={cancelClick} />
              <Title>Dates</Title>
              <Reset onClick={resetClick}>Reset</Reset>
            </Header>
            <DateBtn
              onClick={() => {
                this.changeFocusedInput("startDate");
              }}
              selected={focusedInput === "startDate"}
            >
              {dateToString(startDate) || "Check-in"}
            </DateBtn>
            <ArrowRight />
            <DateBtn
              onClick={() => {
                this.changeFocusedInput("endDate");
              }}
              selected={focusedInput === "endDate"}
            >
              {dateToString(endDate) || "Check-out"}
            </DateBtn>
            <Bottom>
              <Save onClick={saveClick}>Save</Save>
            </Bottom>
          </React.Fragment>
        )}
        <DayPickerRangeController
          startDate={startDate}
          endDate={endDate}
          onDatesChange={dateChange}
          onFocusChange={this.handleFocusChange}
          focusedInput={focusedInput}
          hideKeyboardShortcutsPanel
          numberOfMonths={numberOfMonths}
          noBorder={true}
          minimumNights={1}
          isOutsideRange={day =>
            moment()
              .subtract(1, "days")
              .isAfter(day)
          }
          orientation={matchesXs ? "horizontal" : "verticalScrollable"}
        />
      </React.Fragment>
    );
  }
}
