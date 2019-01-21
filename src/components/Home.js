import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Transition, animated, config, Spring } from "react-spring";
import Social from "./Social";
import Icon from "./Icon";
import Grid from "./styles/Grid";
import {mediaMax} from "./styles/utilities";

const SectionHome = styled(Grid).attrs({
  as: animated.section
})`
  position: fixed;
  height: 100vh;
  z-index: -100;
  ${mediaMax.tablet`top: 6rem;`}
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/hero.jpg");
  background-size: cover;
  background-position: left top;
  color: ${props => props.theme.white};
  backface-visibility: hidden;
  will-change: ${props => props.ready ? 'transform, opacity' : ''};

  & div:first-child {
    grid-column: 2/-2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -8rem;
  }

  h1 {
    font-size: 3.5vw;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    ${mediaMax.tablet`font-size: 5vw; letter-spacing: .5px;`};
    ${mediaMax.phone`font-size: 6vw`};
  }
`;

const StyledRow = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  h2 {
    font-size: 2vw;
    ${mediaMax.tablet`font-size: 3vw`};
    ${mediaMax.phone`font-size: 4vw`};
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

  ${mediaMax.tablet`display:none;`}
`;


export default class Home extends Component {
  state = {
    prevY: 0,
    y: 0,
    ready: null,
  }

  handleClick = (eTarget) => {
    const buttonTop = eTarget.getBoundingClientRect().top,
      contentTop = this.props.getContentPosition();

    let scrollNeeded;
    if (this.props.scrollPercent === 0) { // If scroll not activated yet
      scrollNeeded = (window.innerHeight / 1.3); // Bring up the below div halfway
    } else {
      scrollNeeded = contentTop - buttonTop + (((100 - this.props.scrollPercent) / 400 * window.innerHeight) - 50);
      // offset between two + amount button will transform
    }
    window.scrollBy({
      top: scrollNeeded,
      left: 0,
      behavior: "smooth"
    });
  };

  componentDidMount() {
    this.setState(state =>({
      ready: state.y !== 0
    }))
  }

  componentWillUnmount() {
    this.setState(state =>({ ready: false }))
  }


  componentDidUpdate(prevProps) {
    if (prevProps.scrollPercent !== 0
        && this.props.scrollPercent !== prevProps.scrollPercent) {
      this.setState({ prevY: prevProps.scrollPercent / 4, y: this.props.scrollPercent / 4 })
    }
  }

  render() {
    let { prevY, y, ready } = this.state;
    return (
      <>
      <Spring
        native
        from={{ translateY: prevY }}
        to={{translateY: y }}
        config={{tension: 0, friction: 0, mass: 3, precision: .1, easing: 'ease-out'}}
        >
          {props =>
        <SectionHome ready style={{
          transform: props.translateY.interpolate(translateY => `translate3d(0,-${translateY}%,0)`)
        }}>
        <Content />
        </SectionHome>
        }
        </Spring>

          </>
    );
  }
}

function Content() {
  return (
    <div>
    <Transition
      native
      force
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
{
    <Transition
      native
      from={{ transform: "translate3d(0,-2rem,0)", opacity: 0 }}
      enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{ ...config.molasses }}
      delay={1000}
    >
      {() => props => (
        <StyledRow style={props} >
          <h2>Front-End Web Developer / San Francisco</h2>
          <ButtonScrollDown
            onClick={e => this.handleClick(e.currentTarget)}
          >
            <Icon name="arrowDown" width="3vw" strokeWidth="1" />
          </ButtonScrollDown>
        </StyledRow>
      )}
    </Transition>
}
<Social />
  </div>
  )
}