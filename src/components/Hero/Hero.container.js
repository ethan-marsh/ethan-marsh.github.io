import React, { Component } from 'react';
import { heroData as heroText } from 'data';
import bgurl from 'assets/bg-keyboard.jpg';
import AnimatedWrapper from './Hero.animated';

class Hero extends Component {
  state = {
    prevY: 0,
    y: 0,
  };

  componentDidUpdate(prevProps) {
    const { wHeight, scrollY } = this.props;
    const scrollPct = (scrollY / (wHeight * 4)) * 100;
    // const scrollpx = scrollY / 4;

    if (scrollY < wHeight && scrollY !== prevProps.scrollY) {
      this.setState({ y: scrollPct });
    }
  }

  handleClick = (eTarget) => {
    const { getContentPosition, scrollY, wHeight } = this.props;
    const buttonTop = eTarget.getBoundingClientRect().top;

    const contentTop = getContentPosition();

    let scrollNeeded;
    if (scrollY === 0) {
      // If scroll not activated yet
      scrollNeeded = wHeight / 1.35; // Bring up the below div halfway
    } else {
      scrollNeeded = contentTop - buttonTop + ((100 - (scrollY / (wHeight * 4)) * 100) / 400) * wHeight - 80;
      // offset between two + amount button will transform
    }
    // console.log(scrollNeeded);
    window.scrollBy({
      top: scrollNeeded,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { prevY, y } = this.state;
    return (
      <AnimatedWrapper
        prevY={prevY}
        y={y}
        handleClick={this.handleClick}
        titleMain={heroText.main}
        titleSub={heroText.sub}
        bgurl={bgurl}
      />
    );
  }
}

export default Hero;
