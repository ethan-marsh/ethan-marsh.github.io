import React, { Component } from 'react';
import Measure from 'react-measure';

// Decorates passed in component with a prop for its height
const measureItem = MeasuredComponent => {
  class MeasureItem extends Component {
    state = {
      rectHeight: -1,
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
            <MeasuredComponent measureRef={measureRef} rectHeight={rectHeight} {...props} />
          )}
        </Measure>
      );
    }
  }

  return MeasureItem;
};

export default measureItem;
