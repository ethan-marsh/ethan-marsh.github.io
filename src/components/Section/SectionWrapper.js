import React, { Component } from 'react';
import StyledSection from './StyledSection';

class SectionWrapper extends Component {
  componentDidMount() {
    const { rectHeight, sectionNum, updateSectionHeight } = this.props;
    updateSectionHeight(sectionNum, rectHeight);
    // Pass the section height so nav knows when active
  }

  componentDidUpdate(prevProps) {
    const {
      rectHeight,
      updateSectionHeight,
      activeNavLink,
      scrollY,
      sectionHeights,
      updateActiveNavLink,
      sectionNum,
    } = this.props;

    if (rectHeight !== prevProps.rectHeight) {
      updateSectionHeight(sectionNum, rectHeight);
      // If the window is resized and heights change, let state know
    }

    // Compile section heights
    const bp = [
      sectionHeights[0],
      sectionHeights[0] + sectionHeights[1],
      sectionHeights[0] + sectionHeights[1] + sectionHeights[2],
    ];
    // Compare the scroll & set nav link to the right section
    if (scrollY !== prevProps.scrollY) {
      if (scrollY < bp[0] && activeNavLink !== 'home') {
        updateActiveNavLink('home');
      } else if (scrollY > bp[0] && scrollY < bp[1] && activeNavLink !== 'about') {
        updateActiveNavLink('about');
      } else if (scrollY > bp[1] && scrollY < bp[2] && activeNavLink !== 'background') {
        updateActiveNavLink('background');
      } else if (scrollY > bp[2] && activeNavLink !== 'work') {
        updateActiveNavLink('work');
      }
    }
  }

  render() {
    const { ...props } = this.props;
    return <StyledSection isPortfolio={props.title === 'portfolio'} {...props} />;
  }
}

export default SectionWrapper;
