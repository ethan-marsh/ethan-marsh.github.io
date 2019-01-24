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
      sectionNum,
    } = this.props;

    if (rectHeight !== prevProps.rectHeight) {
      updateSectionHeight(sectionNum, rectHeight);
      // If the window is resized and heights change, let state know
    }

    const bp = [
      sectionHeights[0],
      sectionHeights[0] + sectionHeights[1],
      sectionHeights[0] + sectionHeights[1] + sectionHeights[2],
    ];
    if (scrollY !== prevProps.scrollY) {
      if (scrollY < bp[0] && activeNavLink !== 'home') {
        updateActiveNav('home');
      } else if (scrollY > bp[0] && scrollY < bp[1] && activeNavLink !== 'about') {
        updateActiveNav('about');
      } else if (scrollY > bp[1] && scrollY < bp[2] && activeNavLink !== 'background') {
        updateActiveNav('background');
      } else if (scrollY > bp[2] && activeNavLink !== 'work') {
        updateActiveNav('work');
      }
    }
  }

  render() {
    return <StyledSection {...this.props} />;
  }
}

export default SectionWrapper;
