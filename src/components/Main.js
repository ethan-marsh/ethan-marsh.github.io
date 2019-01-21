import React, { Component } from "react";
import styled from "styled-components";

//* COMPONENTS *//
import Home from "./Home";
import About from "./About";
import Background from "./Background";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Grid from "./styles/Grid";
import {mediaMax} from "./styles/utilities";

const MainContent = styled(Grid)`
  grid-auto-flow: row;
  grid-auto-rows: auto-fill;
  justify-items: stretch;
  align-items: stretch;
  position: absolute;
  top: 100vh;
  ${mediaMax.tablet`
    top: 95vh;
  `}
  left: 0;
  z-index: 99;
`;

// --- APP START --- //
class Main extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.contentRef = React.createRef();

    this.state = {
      activeLink: "home",
    };
  }

  getContentPosition = () => {
    const currentRef = this.contentRef.current;
    const positions = currentRef.getBoundingClientRect();
    return positions.top;
  }

  render() {
    return (
      <div className="main">
        <Home
          id="home"
          className="home"
          getContentPosition={this.getContentPosition}
          scrollPercent={this.props.scrollPercent}
        />

        <MainContent ref={this.contentRef}>
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
