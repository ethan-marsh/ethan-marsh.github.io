import React, { Component } from 'react';
import Measure from 'react-measure';

// Decorates passed in component with a prop for its height
const measureItem = MeasuredComponent => {
  class MeasureItem extends Component {
    state = {
      rectHeight: -1,
      fromTop: -1,
    };

    handleResize = contentRect => {
      const { height } = contentRect.bounds;
      this.setState({
        rectHeight: height,
      });
    };

    handleScroll = contentRect => {
      const { top } = contentRect.top;
      this.setState({
        fromTop: top,
      });
    };

    render() {
      const { rectHeight, fromTop } = this.state;
      const { ...props } = this.props;
      return (
        <Measure bounds onResize={this.handleResize} onScroll={this.handleScroll}>
          {({ measureRef }) => (
            <MeasuredComponent
              measureRef={measureRef}
              rectHeight={rectHeight}
              fromTop={fromTop}
              {...props}
            />
          )}
        </Measure>
      );
    }
  }

  return MeasureItem;
};

export default measureItem;
