import React, { PureComponent } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { iconData } from 'data';

export default class Icon extends PureComponent {
  render() {
    const { name } = this.props;
    const { viewBox, path } = iconData[name];

    switch (name) {
      case 'arrowDown':
        return (
          <svg x="0" y="0" viewBox={viewBox}>
            <polygon
              points={path}
              width={this.props.width || '100%'}
              height={this.props.height || '100%'}
              fill={this.props.fill || 'currentColor'}
              stroke={this.props.stroke || 'currentColor'}
              strokeWidth={this.props.strokeWidth || 'initial'}
              strokeLinecap={this.props.strokeLinecap || 'initial'}
            />
          </svg>
        );

      default:
        return (
          <svg
            x="0"
            y="0"
            width={this.props.width || '100%'}
            height={this.props.height || '100%'}
            viewBox={viewBox}
          >
            <g
              width="100%"
              height="100%"
              fill={this.props.fill || 'currentColor'}
              stroke={this.props.stroke || 'transparent'}
              strokeWidth={this.props.strokeWidth || 'initial'}
              strokeLinecap={this.props.strokeLinecap || 'initial'}
            >
              {path}
            </g>
          </svg>
        );
    }
  }
}
