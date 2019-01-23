import React, { Component } from 'react';
import styled from 'styled-components';

//* COMPONENTS *//
import Hero from './Hero';
import AboutSection from './AboutSection';
import Background from './Background';
import Portfolio from './Portfolio';
import Footer from './Footer';
import measureSection from './measureSection';
import sectionWrapper from 'components/sectionWrapper';

import Grid from './styles/Grid';
import { mediaMax } from './styles/utils';

const MainSections = styled(Grid)`
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

const About = sectionWrapper(AboutSection);
const BackgroundSection = measureSection(Background);
const PortfolioSection = measureSection(Portfolio);

// --- APP START --- //
class Home extends Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();

    this.state = {
      activeLink: 'home'
    };
  }

  getContentPosition = () => {
    const currentRef = this.contentRef.current;
    const positions = currentRef.getBoundingClientRect();
    return positions.top;
  };

  render() {
    const {
      scrollPercent,
      updateActiveNav,
      scrollY,
      activeNavLink,
      updateSectionHeight,
      sectionHeights
    } = this.props;
    return (
      <div className="main">
        <Hero
          getContentPosition={this.getContentPosition}
          scrollPercent={scrollPercent}
        />

        <MainSections ref={this.contentRef}>
          <About
            id="about"
            title="about"
            updateActiveNav={updateActiveNav}
            scrollY={scrollY}
            activeNavLink={activeNavLink}
            updateSectionHeight={updateSectionHeight}
            sectionHeights={sectionHeights}
          />
          <BackgroundSection
            id="background"
            title="background"
            updateActiveNav={updateActiveNav}
            scrollY={scrollY}
            activeNavLink={activeNavLink}
            updateSectionHeight={updateSectionHeight}
            sectionHeights={sectionHeights}
          />
          <PortfolioSection
            id="work"
            updateActiveNav={updateActiveNav}
            scrollY={scrollY}
            activeNavLink={activeNavLink}
            updateSectionHeight={updateSectionHeight}
            sectionHeights={sectionHeights}
          />
          <Footer />
        </MainSections>
      </div>
    );
  }
}

export default Home;
