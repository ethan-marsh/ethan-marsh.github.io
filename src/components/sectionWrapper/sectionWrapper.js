import React, { Component } from 'react';
import StyledSection from './styledSection';
import measureSection from 'components/measureSection';

const sectionWrapper = SectionComponent => {
  class SectionWrapper extends Component {
    componentDidMount() {
      const { title, rectHeight, updateSectionHeight } = this.props;
      updateSectionHeight(title, rectHeight); // Pass the section height so nav knows when active
    }

    render() {
      const { measureRef, ...rest } = this.props;
      return (
        <SectionComponent>
          <StyledSection measureRef={measureRef} {...rest} />;
        </SectionComponent>
      );
    }
  }

  return measureSection(SectionWrapper);
};

export default sectionWrapper;
