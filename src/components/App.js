import React, { Component } from "react";
import styled from "styled-components";

//* COMPONENTS *//
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Background from "./Background";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import { Grid } from "./styles/Grid";

//* STYLES *//
import "../sass/main.scss";

const MainContent = styled(Grid)`
  grid-auto-rows: max-content;
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
class App extends Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.aboutRef = React.createRef();
  }

  state = {
    nav: ["home", "about", "background", "work"],
    activeLink: "home",
    headerIsScrolled: false,
    aboutPosition: 0,
    headerHeight: 79,
    homeOffset: 100
  };

  componentDidMount = () => {
    // Add scroll event listener to window
    window.addEventListener("scroll", this.handleScroll);
    // Update the header height state
    // this.getHeaderHeight(this.headerRef.current);
  };

  componentWillUnmount = () => {
    // Remove scroll listener from window
    window.removeEventListener("scroll", this.handleScroll);
  };

  activateLink = activeLink => {
    // Activate nav link item
    this.setState({ activeLink });
  };

  // Keep the state updated with the top of the about position
  getAboutPosition = node => {
    const posObj = node.getBoundingClientRect(),
      top = Math.floor(posObj.top);
    this.setState({ aboutPosition: top });
  };

  // Get amount to move home section
  transformSection = windowHeight => {
    const homeOffset = Math.floor(
      (this.state.aboutPosition / windowHeight) * 100
    ); // get a round number
    if (homeOffset > 0) {
      this.setState({ homeOffset });
    } else this.setState({ homeOffset: 0 }); // don't keep setting it once it's out of view
  };

  handleScroll = e => {
    // Keep aboutPosition state updated
    this.getAboutPosition(this.aboutRef.current);

    // Translate the home section up slower
    this.transformSection(e.currentTarget.innerHeight);

    // Toggle class when about position reaches header height
    if (this.state.aboutPosition < this.state.headerHeight) {
      this.setState({ headerIsScrolled: true });
      //this.headerRef.current.classList.add("header--scrolled");
    } else this.setState({ headerIsScrolled: false });
    //this.headerRef.current.classList.remove("header--scrolled");
  };

  render() {
    return (
      <div className="app">
        <Header
          headerIsScrolled={this.state.headerIsScrolled}
          height={this.state.headerHeight}
          nav={this.state.nav}
          activeLink={this.state.activeLink}
          activateLink={this.activateLink}
        />

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

export default App;
