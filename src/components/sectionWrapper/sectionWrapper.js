import React, { Component } from 'react';
import StyledSection from './StyledSection';

class SectionWrapper extends Component {
  componentDidMount() {
    const { updateSectionHeight, rectHeight, sectionNum } = this.props;
    updateSectionHeight(sectionNum, rectHeight); // Pass the section height so nav knows when active
  }

  componentDidUpdate(prevProps) {
    const {
      rectHeight,
      updateSectionHeight,
      activeNavLink,
      scrollY,
      sectionHeights,
      updateActiveNav,
    } = this.props;
    if (rectHeight !== prevProps.rectHeight) {
      updateSectionHeight(1, rectHeight);
    }
    if (activeNavLink !== 'about' && scrollY > prevProps.scrollY) {
      if (scrollY > sectionHeights[0] / 2 && scrollY < sectionHeights[0] + sectionHeights[1]) {
        updateActiveNav('about');
      }
    } else if (
      activeNavLink === 'about'
      && scrollY < prevProps.scrollY
      && scrollY < sectionHeights[0]
    ) {
      updateActiveNav('home');
    }
  }

  render() {
    return <StyledSection {...this.props} />;
  }
}

export default SectionWrapper;
