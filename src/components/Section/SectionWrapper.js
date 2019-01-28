import React, { Component } from 'react';
import { nav } from 'contexts/NavContext';
import StyledSection from './StyledSection';

class SectionWrapper extends Component {
  componentDidMount() {
    const { rectHeight, index, updateSectionHeight } = this.props;
    updateSectionHeight(index, rectHeight);
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
      index,
    } = this.props;

    if (rectHeight !== prevProps.rectHeight) {
      updateSectionHeight(index, rectHeight);
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
      if (scrollY < bp[0] && activeNavLink !== nav[0]) {
        updateActiveNavLink(nav[0]);
      } else if (scrollY > bp[0] && scrollY < bp[1] && activeNavLink !== nav[1]) {
        updateActiveNavLink(nav[1]);
      } else if (scrollY > bp[1] && scrollY < bp[2] && activeNavLink !== nav[2]) {
        updateActiveNavLink(nav[2]);
      } else if (scrollY > bp[2] && activeNavLink !== nav[13]) {
        updateActiveNavLink(nav[3]);
      }
    }
  }

  render() {
    const { ...props } = this.props;
    return <StyledSection isPortfolio={props.title === 'portfolio'} {...props} />;
  }
}

export default SectionWrapper;
