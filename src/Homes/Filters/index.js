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
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  height: 56px;
  background: white;
`;

export default class extends React.Component {
  state = {
    selectedFilter: null,
    startDate: null,
    endDate: null
  };

  handleFilterClick = name => {
    function toggle(prevState, newName) {
      return prevState.selectedFilter === newName ? null : newName;
    }

    this.setState(prevState => ({
      selectedFilter: toggle(prevState, name)
    }));
  };

  handleOverlayClick = () => {
    this.setState({ selectedFilter: null });
  };

  handleDateChange = (startDate, endDate) => {
    console.log(startDate, endDate);
    //this.setState({ startDate, endDate });
  };

  render() {
    const { selectedFilter, startDate, endDate } = this.state;
    return (
      <Header>
        <Grid>
          <Filter
            name="Dates"
            selected={selectedFilter === "Dates"}
            handleFilterClick={this.handleFilterClick}
            handleOverlayClick={this.handleOverlayClick}
          >
            <Calendar
              startDate={startDate}
              endDate={endDate}
              handleDateChange={this.handleDateChange}
            />
          </Filter>
          <Filter
            name="Guests"
            selected={selectedFilter === "Guests"}
            handleFilterClick={this.handleFilterClick}
            handleOverlayClick={this.handleOverlayClick}
          >
            Empty
          </Filter>
          <Filter
            name="Room type"
            desktopOnly
            selected={selectedFilter === "Room type"}
            handleFilterClick={this.handleFilterClick}
            handleOverlayClick={this.handleOverlayClick}
          >
            Empty
          </Filter>
          <Filter
            name="Price"
            desktopOnly
            selected={selectedFilter === "Price"}
            handleFilterClick={this.handleFilterClick}
            handleOverlayClick={this.handleOverlayClick}
          >
            Empty
          </Filter>
          <Filter
            name="Instant book"
            desktopOnly
            selected={selectedFilter === "Instant book"}
            handleFilterClick={this.handleFilterClick}
            handleOverlayClick={this.handleOverlayClick}
          >
            Empty
          </Filter>
          <Filter
            name="More Filters"
            selected={selectedFilter === "More Filters"}
            handleFilterClick={this.handleFilterClick}
            handleOverlayClick={this.handleOverlayClick}
          >
            Empty
          </Filter>
        </Grid>
      </Header>
    );
  }
}
