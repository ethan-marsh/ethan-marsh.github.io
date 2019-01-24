import React, { Component } from 'react';
import BackgroundContent from './BackgroundContent';
import { jobs } from 'api';

class Background extends Component {
  render() {
    const { measureRef, ...props } = this.props;
    return jobs && <BackgroundContent ref={measureRef} jobs={jobs} {...props} />;
  }
}

export default Background;
