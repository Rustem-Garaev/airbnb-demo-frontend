import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css";
import Header from "./Header";
import Landing from "./Landing";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/homes" exact component={Homes} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
