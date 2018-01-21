import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import Filter from "./Filter";
import Calendar from "./Calendar";

const Header = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  border-top: 0.5px solid rgba(72, 72, 72, 0.3);
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  background: white;
  z-index: 5;
`;

function getDateButtonTitle(startDate, endDate, selectedFilter) {
  const startDateString = startDate && startDate.format("DD MMM");
  const endDateString = endDate && endDate.format("DD MMM");

  return startDateString && endDateString
    ? `${startDateString} - ${endDateString}`
    : selectedFilter === "Dates" ? "Check in - Check out" : "Dates";
}

export default class extends React.Component {
  state = {
    selectedFilter: null,
    startDate: null,
    endDate: null
  };

  handleFilterClick = name => {
    this.setState(prevState => ({
      selectedFilter: prevState.selectedFilter === name ? null : name
    }));
  };

  handleCancelClick = () => {
    this.setState({
      selectedFilter: null,
      startDate: null,
      endDate: null
    });
  };

  handleDateChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  handleApplyClick = () => {
    this.setState({ selectedFilter: null });
  };

  handleOverlayClick = () => {
    this.setState({
      selectedFilter: null,
      startDate: null,
      endDate: null
    });
  };

  handleResetClick = () => {
    this.setState({
      startDate: null,
      endDate: null
    });
  };

  render() {
    const { selectedFilter, startDate, endDate } = this.state;

    return (
      <Header>
        <Grid>
          <Filter
            /*name - постояное значение, title - меняется если фильтр активен*/
            name="Dates"
            title={getDateButtonTitle(startDate, endDate, selectedFilter)}
            selected={selectedFilter === "Dates"}
            filterClick={this.handleFilterClick}
            overlayClick={this.handleCancelClick}
            applyClick={this.handleApplyClick}
            cancelClick={this.handleCancelClick}
          >
            <Calendar
              startDate={startDate}
              endDate={endDate}
              dateChange={this.handleDateChange}
              cancelClick={this.handleCancelClick}
              resetClick={this.handleResetClick}
              saveClick={this.handleApplyClick}
            />
          </Filter>
          <Filter
            name="Guests"
            title="Guests"
            selected={selectedFilter === "Guests"}
            filterClick={this.handleFilterClick}
          >
            Empty
          </Filter>
          <Filter
            name="Room type"
            title="Room type"
            lgOnly
            selected={selectedFilter === "Room type"}
            filterClick={this.handleFilterClick}
          >
            Empty
          </Filter>
          <Filter
            name="Price"
            title="Price"
            lgOnly
            selected={selectedFilter === "Price"}
            filterClick={this.handleFilterClick}
          >
            Empty
          </Filter>
          <Filter
            name="Instant book"
            title="Instant book"
            lgOnly
            selected={selectedFilter === "Instant book"}
            filterClick={this.handleFilterClick}
          >
            Empty
          </Filter>
          <Filter
            name="More Filters"
            title="More Filters"
            selected={selectedFilter === "More Filters"}
            filterClick={this.handleFilterClick}
          >
            Empty
          </Filter>
        </Grid>
      </Header>
    );
  }
}
