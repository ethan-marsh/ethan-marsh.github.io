import React, { Component } from 'react';
import { jobs } from 'data';
import ExperienceComponent from './Experience.component';

class Experience extends Component {
  render() {
    const { measureRef, ...props } = this.props;
    return jobs && <ExperienceComponent ref={measureRef} jobs={jobs} {...props} />;
  }
}

export default Experience;
