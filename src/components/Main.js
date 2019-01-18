import React, { Component } from "react";
import styled from "styled-components";

//* COMPONENTS *//
import Home from "./Home";
import About from "./About";
import Background from "./Background";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Grid from "./styles/Grid";
import {ScrollContext, themes} from './scroll-context';

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

// function ToggleHeaderTheme() {
//   return (

//   )
// }

// )

// --- APP START --- //
class Main extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();

    this.toggleHeaderTheme = () => {
      this.context.toggleTheme();
      // console.log('Theme was toggled');
      // this.setState(state => ({
      //   theme:
      //   state.theme === themes.initial
      //   ? themes.scrolled
      //   : themes.initial,
      // }));
    }

    this.state = {
      activeLink: "home",
      headerIsScrolled: false,
      aboutPosition: 0,
      headerHeight: 79,
      homeOffset: 100,
    };

    this.handleScroll = e => {
      // call about position set state
      this.getAboutPosition(this.aboutRef.current);
      // translate home section
      this.transformSection(e.currentTarget.innerHeight);
      // Toggle class when about position reaches header height
      if (this.state.aboutPosition < this.state.headerHeight) {
        //this.setState({ headerIsScrolled: true });
        this.props.toggleHeaderTheme();
      } else this.setState({ headerIsScrolled: false });
    };

    this.getAboutPosition = node => {
      const posObj = node.getBoundingClientRect();
      const top = Math.floor(posObj.top);
      this.setState({ aboutPosition: top });
    };

    // calc amount to move home section
    this.transformSection = windowHeight => {
      const homeOffset = Math.floor(
        (this.state.aboutPosition / windowHeight) * 100
      ); // => round number
      if (homeOffset > 0) {
        this.setState({ homeOffset });
      } else this.setState({ homeOffset: 0 }); // don't keep setting it once it's out of view
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    // add scroll event listener to window
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
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
