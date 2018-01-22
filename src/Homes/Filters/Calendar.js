import React from "react";
import "react-dates/initialize";
import "./ReactDates.css";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";
import XsCalendarUi from "./XsCalendarUi";

const matchesXs = matchMedia("(min-width: 577px)").matches;
const matchesLg = matchMedia("(min-width: 992px)").matches;

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
    const numberOfMonths = matchesLg ? 2 : matchesXs ? 1 : 12;
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
          <XsCalendarUi
            cancelClick={cancelClick}
            resetClick={resetClick}
            saveClick={saveClick}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
            changeFocusedInput={this.changeFocusedInput}
          />
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
