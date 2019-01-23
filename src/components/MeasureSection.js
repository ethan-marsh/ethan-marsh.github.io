import React, { Component } from 'react';
import Measure from 'react-measure';

const measureSection = SectionComponent =>
  class MeasureSection extends Component {
    state = {
      fromTop: -1,
      rectHeight: -1
    };

    handleResize = contentRect => {
      const { top, height } = contentRect.bounds;
      this.setState({
        fromTop: top,
        rectHeight: height
      });
    };

    render() {
      const { ...state } = this.state;
      const { handleResize, ...rest } = this.props;
      return (
        <Measure bounds onResize={handleResize}>
          {({ measureRef }) => (
            <SectionComponent measureRef={measureRef} {...rest} {...state} />
          )}
        </Measure>
      );
    }
  };

export default measureSection;
