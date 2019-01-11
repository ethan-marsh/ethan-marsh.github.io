import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "./Header";

export default class Apptest extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <Meta />
        </Helmet>
        <Header />
      </div>
    );
  }
}
