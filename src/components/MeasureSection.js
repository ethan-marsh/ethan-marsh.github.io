import React, { Component } from 'react'
import Measure from 'react-measure';

const MeasureSection = (SectionComponent) => class MeasureSection extends Component {
  state = {
    fromTop: -1,
    rectHeight: -1,
  }

  handleResize = contentRect => {
    const { top, height } = contentRect.bounds
    this.setState({
      fromTop: top,
      rectHeight: height,
    })
  }

  render() {
    return (
      <Measure
        bounds
        onResize={this.handleResize}
      >
        {({ measureRef }) =>
          <SectionComponent
            measureRef={measureRef}
            {...this.props}
            {...this.state}
          />
        }
      </Measure>

    );
  }
}

export default MeasureSection;
