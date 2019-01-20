import React, { Component } from "react";
import styled from "styled-components";

//* COMPONENTS *//
import Home from "./Home";
import About from "./About";
import Background from "./Background";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Grid from "./styles/Grid";

const MainContent = styled(Grid)`
  grid-auto-flow: row;
  grid-auto-rows: auto-fill;
  justify-items: stretch;
  align-items: stretch;
  position: absolute;
  top: 100vh;
  left: 0;
  z-index: 99;
`;

// --- APP START --- //
class Main extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();

    this.state = {
      activeLink: "home",
      headerIsScrolled: false,
      aboutPosition: 0,
      headerHeight: 79,
      homeOffset: 100,
    };

    // calc amount to move home section
    this.transformSection = windowHeight => {
      let homeOffset = Math.floor(
        (this.state.aboutPosition / windowHeight) * 100
      ); // => round number
      if (homeOffset > 0) {
        this.setState({ homeOffset });
      } else this.setState({ homeOffset: 0 }); // don't keep setting it once it's out of view
    };
  }

  render() {
    return (
      <div className="main">
        <Home
          id="home"
          className="home"
          aboutPosition={this.state.aboutPosition}
          homeOffset={this.state.homeOffset}
        />

        <MainContent>
          <About id="about" title="about" forwardedRef={this.aboutRef} />
          <Background id="background" title="background" />
          <Portfolio id="work" />
          <Footer />
        </MainContent>
      </div>
    );
  }
}

export default Main;
