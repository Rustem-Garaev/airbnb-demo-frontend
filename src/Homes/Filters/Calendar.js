import React from "react";
import styled from "styled-components";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
const matchesXs = window.matchMedia("(min-width: 577px)").matches,
  matchesMd = window.matchMedia("(min-width: 769px)").matches,
  matchesLg = window.matchMedia("(min-width: 992px)").matches;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: null,
      startDate: props.startDate,
      endDate: props.endDate
    };
  }

  handleFocusChange = focusedInput => {
    console.log(focusedInput, 1);
    this.setState({
      focusedInput: !focusedInput ? "START_DATE" : focusedInput
    });
  };

  getNumberOfMonths = () => (matchesLg ? 2 : matchesMd ? 1 : 2);

  render() {
    return (
      <DayPickerRangeController
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={({ startDate, endDate }) => {
          this.props.handleDateChange(startDate, endDate);
        }}
        hideKeyboardShortcutsPanel
        numberOfMonths={this.getNumberOfMonths()}
        noBorder={true}
      />
    );
  }
}
