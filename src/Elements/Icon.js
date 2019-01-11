import React, { Component } from "react";

import { iconData } from "data";

export default class Icon extends Component {
  render() {
    const { viewBox, path } = iconData[this.props.name];

    switch (this.props.name) {
      case "arrowDown":
        return (
          <svg x="0" y="0" viewBox={viewBox}>
            <polygon
              points={path}
              width={this.props.width || "100%"}
              height={this.props.height || "100%"}
              fill={this.props.fill || "currentColor"}
              stroke={this.props.stroke || "currentColor"}
              strokeWidth={this.props.strokeWidth || "initial"}
              strokeLinecap={this.props.strokeLinecap || "initial"}
            />
          </svg>
        );

      default:
        return (
          <svg
            x="0"
            y="0"
            width={this.props.width || "100%"}
            height={this.props.height || "100%"}
            viewBox={viewBox}
          >
            <g
              width="100%"
              height="100%"
              fill={this.props.fill || "currentColor"}
              stroke={this.props.stroke || "transparent"}
              strokeWidth={this.props.strokeWidth || "initial"}
              strokeLinecap={this.props.strokeLinecap || "initial"}
            >
              {path}
            </g>
          </svg>
        );
    }
  }
}
