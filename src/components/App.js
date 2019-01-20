import React, { Component } from "react";
//import Header from "./Header";
import Main from "./Main";
import Page from './Page';

export default class App extends Component {
  render() {
    return (
      <Page>
        <Main { ...this.props } />
      </Page>
    );
  }
}
