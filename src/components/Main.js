import React, { Component } from "react";
import styled from "styled-components";

//* COMPONENTS *//
import Home from "./Home";
import About from "./About";
import Background from "./Background";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import MeasureSection from "./MeasureSection";

import Grid from "./styles/Grid";
import { mediaMax } from "./styles/utilities";

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

const BackgroundSection = MeasureSection(Background)
const AboutSection = MeasureSection(About)
const PortfolioSection = MeasureSection(Portfolio)

// --- APP START --- //
class Main extends Component {
  constructor(props) {
    super(props);
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
    const { scrollPercent, updateActiveNav, scrollY, activeNavLink, updateSectionHeight, sectionHeights } = this.props;
    return (
      <div className="main">
        <Home
          getContentPosition={this.getContentPosition}
          scrollPercent={scrollPercent}
        />

        <MainContent ref={this.contentRef}>
          <AboutSection id="about" title="about" updateActiveNav={updateActiveNav} scrollY={scrollY} activeNavLink={activeNavLink} updateSectionHeight={updateSectionHeight} sectionHeights={sectionHeights} />
          <BackgroundSection id="background" title="background" updateActiveNav={updateActiveNav} scrollY={scrollY} activeNavLink={activeNavLink} updateSectionHeight={updateSectionHeight} sectionHeights={sectionHeights} />
          <PortfolioSection id="work" updateActiveNav={updateActiveNav} scrollY={scrollY} activeNavLink={activeNavLink} updateSectionHeight={updateSectionHeight} sectionHeights={sectionHeights}/>
          <Footer />
        </MainContent>
      </div>
    );
  }
}

export default Main;