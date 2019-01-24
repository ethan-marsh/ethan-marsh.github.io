import React, { Component } from 'react';
import styled from 'styled-components';

//* COMPONENTS *//
import Hero from 'components/Hero';
import AboutSection from 'components/AboutSection';
import BackgroundSection from 'components/BackgroundSection';
import Portfolio from 'components/Portfolio';
import Footer from 'components/Footer';
import measureSection from 'components/measureSection';
import SectionWrapper from 'components/SectionWrapper';

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

const Section = measureSection(SectionWrapper); // renders children after decoration
const PortfolioSection = measureSection(Portfolio);

// --- APP START --- //
class Home extends Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createContext();
  }

  getContentPosition = () => {
    const currentRef = this.contentRef.current;
    const positions = currentRef.getBoundingClientRect();
    return positions.top;
  };

  render() {
    let {
      scrollPercent,
      updateActiveNav,
      scrollY,
      activeNavLink,
      updateSectionHeight,
      sectionHeights,
    } = this.props;

    return (
      <div className="main">
        <Hero getContentPosition={this.getContentPosition} scrollPercent={scrollPercent} />

        <MainSections ref={this.contentRef}>
          <Section
            id="about"
            title="about"
            sectionNum={1}
            scrollY={scrollY}
            updateActiveNav={updateActiveNav}
            activeNavLink={activeNavLink}
            updateSectionHeight={updateSectionHeight}
            sectionHeights={sectionHeights}
          >
            <AboutSection />
          </Section>
          <Section
            id="background"
            title="background"
            sectionNum={2}
            updateActiveNav={updateActiveNav}
            scrollY={scrollY}
            activeNavLink={activeNavLink}
            updateSectionHeight={updateSectionHeight}
            sectionHeights={sectionHeights}
          >
            <BackgroundSection />
          </Section>

          <Section
            id="work"
            updateActiveNav={updateActiveNav}
            scrollY={scrollY}
            activeNavLink={activeNavLink}
            updateSectionHeight={updateSectionHeight}
            sectionHeights={sectionHeights}
          >
            <Portfolio />
          </Section>
          <Footer />
        </MainSections>
      </div>
    );
  }
}

export default Home;
