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
  top: 0;
  left: 0;
  z-index: -100;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/hero.jpg");
  background-attachment: scroll;
  filter: contrast(110%);
  background-size: cover;
  background-position: 50% 20%;
  background-repeat: no-repeat;
  color: #fff;
  transform: translate3d(0, ${props => -2 * (100 - props.homeOffset)}px, 0);
  transition: transform ease;

  & > div {
    grid-column: 2/-2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 3.5vw;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
    ${media.tablet`font-size: 5vw; letter-spacing: .5px;`};
    ${media.phone`font-size: 6vw`};
  }
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 3rem;

  h2 {
    font-size: 2vw;
    ${media.tablet`font-size: 3vw`};
    ${media.phone`font-size: 4vw`};
    color: ${props => props.theme.lightgrey};
  }
`;
const Row = animated(StyledRow);

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

  ${media.phone`display:none;`}
`;

export default class Home extends Component {
  scrollToAbout = el => {
    const start = el.getBoundingClientRect();

    // If scroll not activated yet
    let scrollNeeded;
    if (this.props.aboutPosition === 0) {
      scrollNeeded = start.top * 2; // Bring up the below div halfway
    } else {
      scrollNeeded =
        this.props.aboutPosition - start.top + this.props.homeOffset + 10;
    }

    window.scrollBy({
      top: scrollNeeded,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    const { ...props } = this.props;
    return (
      <SectionHome {...props}>
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
              <Row style={props}>
                <h2>Front-End Web Developer / San Francisco</h2>
                <ButtonScrollDown
                  onClick={e => this.scrollToAbout(e.currentTarget)}
                >
                  <Icon name="arrowDown" width="3vw" strokeWidth="1" />
                </ButtonScrollDown>
              </Row>
            )}
          </Transition>
          <Social />
        </div>
      </SectionHome>
    );
  }
}
