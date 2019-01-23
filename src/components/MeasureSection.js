import React, { Component } from 'react';
import Measure from 'react-measure';

const measureSection = SectionComponent =>
  class MeasureSection extends Component {
    state = {
      rectHeight: -1,
      handleResize: this.handleResize,
    };

    handleResize = contentRect => {
      const { height } = contentRect.bounds;
      this.setState({
        rectHeight: height,
      });
    };

    render() {
      const { rectHeight } = this.state;
      const { ...props } = this.props;
      return (
        <Measure bounds onResize={this.handleResize}>
          {({ measureRef }) => (
            <SectionComponent measureRef={measureRef} rectHeight={rectHeight} {...props} />
          )}
        </Measure>
      );
    }
  };

export default measureSection;
