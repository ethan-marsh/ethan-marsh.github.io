import React, { Component } from "react";
import styled from "styled-components";
import { Transition, animated, config } from "react-spring";
import Social from "./Social";
import Icon from "./Icon";
import Grid from "./styles/Grid";
import media from "./styles/utilities";

const SectionHome = styled(Grid).attrs({
  as: "section"
})`
  position: fixed;
  ${media.tablet`top: 6rem;`}
  z-index: -100;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/hero.jpg");
  background-size: cover;
  color: ${props => props.theme.white};
  transform: translate3d(0, -${props => props.translateY}%, 0);
  transition: transform 0ms ease-in-out;
  backface-visibility: hidden;

  & > div {
    grid-column: 2/-2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 3.5vw;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    ${media.tablet`font-size: 5vw; letter-spacing: .5px;`};
    ${media.phone`font-size: 6vw`};
  }
`;

const StyledRow = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  h2 {
    font-size: 2vw;
    ${media.tablet`font-size: 3vw`};
    ${media.phone`font-size: 4vw`};
    color: ${props => props.theme.lightgrey};
  }
`;

const ButtonScrollDown = styled.button`
  color: ${props => props.theme.lightgrey};
  text-decoration: none;
  background: transparent;
  border: none;
  outline: none;
  width: 3vw;
  transition: color 0.2s ease-out;

  &:hover,
  &:active {
    cursor: pointer;
    color: ${props => props.theme.lightblue};
  }

  ${media.tablet`display:none;`}
`;


export default class Home extends Component {
  handleClick = (el) => {
    const buttonTop = el.getBoundingClientRect().top,
          contentTop = this.props.getContentPosition();

    let scrollNeeded;
    if (this.props.scrollPercent === 0) { // If scroll not activated yet
      scrollNeeded = (window.innerHeight / 1.3) - 80; // Bring up the below div halfway
    } else {
      scrollNeeded = contentTop - buttonTop + (((100 - this.props.scrollPercent)/400 * window.innerHeight) - 80);
        // offset between two + amount button will transform
    }
    window.scrollBy({
      top: scrollNeeded,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    let translateY = Math.floor(.25 * this.props.scrollPercent); // move the section slower than scroll
    return (
      <SectionHome translateY={translateY}>
        <div>
          <Transition
            native
            items={{ item: true }}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ ...config.molasses }}
          >
            {() => props => (
              <animated.h1 style={props} children={"Ethan Marsh"} />
            )}
          </Transition>

          <Transition
            native
            from={{ transform: "scaleX(3)", opacity: 0 }}
            enter={{ transform: "scaleX(1)", opacity: 0.5 }}
            leave={{ transform: "scaleX(0)", opacity: 0 }}
            config={{ ...config.slow }}
          >
            {() => props => <animated.hr style={props} />}
          </Transition>

          <Transition
            native
            from={{ transform: "translate3d(0,-2rem,0)", opacity: 0 }}
            enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ ...config.molasses }}
            delay={1000}
          >
            {() => props => (
              <StyledRow style={props} ref={this.buttonRef}>
                <h2>Front-End Web Developer / San Francisco</h2>
                <ButtonScrollDown
                  onClick={e => this.handleClick(e.currentTarget)}
                >
                  <Icon name="arrowDown" width="3vw" strokeWidth="1" />
                </ButtonScrollDown>
              </StyledRow>
            )}
          </Transition>
          <Social />
        </div>
      </SectionHome>
    );
  }
}
