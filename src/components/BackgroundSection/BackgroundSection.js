import React, { Component } from 'react';
import BackgroundContent from './BackgroundContent';
import { jobs } from 'api';

class Background extends Component {
  // componentDidMount() {
  //   this.props.updateSectionHeight(2, this.props.rectHeight);
  // }

  // // sets nav at either about or background
  // componentDidUpdate(prevProps) {
  //   if (this.props.rectHeight !== prevProps.rectHeight) {
  //     this.props.updateSectionHeight(2, this.props.rectHeight);
  //   }
  //   if (
  //     this.props.activeNavLink === 'about' &&
  //     this.props.scrollY > prevProps.scrollY &&
  //     this.props.scrollY > this.props.sectionHeights[0] + this.props.sectionHeights[1]
  //   ) {
  //     this.props.updateActiveNav('background');
  //   } else if (
  //     this.props.activeNavLink === 'background' &&
  //     this.props.scrollY < prevProps.scrollY && // scrolling up
  //     this.props.scrollY < this.props.sectionHeights[0] + this.props.sectionHeights[1]
  //   ) {
  //     this.props.updateActiveNav('about');
  //   }
  // }

  render() {
    const { measureRef, ...props } = this.props;
    return jobs && <BackgroundContent ref={measureRef} jobs={jobs} {...props} />;
  }
}

export default Background;
