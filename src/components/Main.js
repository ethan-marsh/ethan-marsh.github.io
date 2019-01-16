import React, { Component } from "react";
import styled from "styled-components";

//* COMPONENTS *//
import Home from "./Home";
import About from "./About";
import Background from "./Background";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Grid from "./styles/Grid";

//* STYLES *//
import "../sass/main.scss";

const MainContent = styled(Grid)`
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  position: absolute;
  top: 100vh;
  left: 0;
  z-index: 99;

  grid-template-areas:
    "about about about about about about about about about about about about"
    "backg backg backg backg backg backg backg backg backg backg backg backg"
    "works works works works works works works works works works works works"
    "footr footr footr footr footr footr footr footr footr footr footr footr";
`;

// --- APP START --- //
class Main extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
  }

  state = {
    activeLink: "home",
    headerIsScrolled: false,
    aboutPosition: 0,
    headerHeight: 79,
    homeOffset: 100
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    // add scroll event listener to window
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
    // remove scroll listener from window
  };

  activateLink = activeLink => {
    this.setState({ activeLink });
    // activate nav link item
  };

  handleScroll = e => {
    // call about position set state
    this.getAboutPosition(this.aboutRef.current);

    // translate home section
    this.transformSection(e.currentTarget.innerHeight);

    // Toggle class when about position reaches header height
    if (this.state.aboutPosition < this.state.headerHeight) {
      this.setState({ headerIsScrolled: true });
    } else this.setState({ headerIsScrolled: false });
  };

  getAboutPosition = node => {
    const posObj = node.getBoundingClientRect(),
      top = Math.floor(posObj.top);
    // maintain state with the top of the about section position
    this.setState({ aboutPosition: top });
  };

  // calc amount to move home section
  transformSection = windowHeight => {
    const homeOffset = Math.floor(
      (this.state.aboutPosition / windowHeight) * 100
    ); // => round number

    if (homeOffset > 0) {
      this.setState({ homeOffset });
    } else this.setState({ homeOffset: 0 }); // don't keep setting it once it's out of view
  };

  render() {
    return (
      <div className="main">
        {/* <Header
          headerIsScrolled={this.state.headerIsScrolled}
          height={this.state.headerHeight}
          nav={this.state.nav}
          activeLink={this.state.activeLink}
          activateLink={this.activateLink}
        /> */}

        <Home
          id="home"
          className="home"
          aboutPosition={this.state.aboutPosition}
          homeOffset={this.state.homeOffset}
        />

        <MainContent>
          <About
            forwardedRef={this.aboutRef}
            id="about"
            className="about"
            title="about"
          />
          <Background
            id="background"
            className="background"
            title="background"
          />
          <Portfolio id="work" className="portfolio" />
          <Footer id="footer" className="footer" />
        </MainContent>
      </div>
    );
  }
}

export default Main;
