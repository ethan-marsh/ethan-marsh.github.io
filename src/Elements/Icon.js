import React, { Component } from 'react';

export default class Icon extends Component {
    render() {
      switch(this.props.name) {
       case 'arrow-down':
        return (
            <svg
                x="0px"
                y="0px"
                width={this.props.width || '100%'}
                height={this.props.height || '100%'}
                viewBox="0 0 455.27 166.54"
                onMouseOver={this.handleSVGHoverEvent}
                onMouseOut={this.handleSVGHoverEvent}
            >
            <polygon
                points="454.77 32.52 229.19 165.96 0.85 37.33 0.51 5.06 230.63 133.98 454.43 0.87 454.77 32.52"
                width='100%'
                height='100%'
                fill={this.props.fill || 'currentColor'}
                stroke={this.props.stroke || 'transparent'}
                strokeWidth={this.props.strokeWidth || 'initial'}
                strokeLinecap={this.props.strokeLinecap || 'initial'}
            />
            </svg>
        )
        default:
         return (
             <span>NEED TO GIVE ME A NAME!!</span>
         )
    }
}
}