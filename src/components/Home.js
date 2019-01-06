import React, { Component, Fragment } from "react";
import styled from "styled-components";
import {Transition, animated, config} from "react-spring";

import Social from "./Social";

export default class Home extends Component {
  scrollToAbout = el => {
    const start = el.getBoundingClientRect(),
          target = document.querySelector("#about").getBoundingClientRect(),
          scrollNeeded = target.top - start.top;

    window.scrollBy({
      top: scrollNeeded,
      left: 0,
      behavior: "smooth"
    });
  };


  render() {
    return (
      <Fragment>
       <div className="home__title">
          <Transition
            native
            items={{ item: true }}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ ...config.molasses }}>
            {() =>
              props =>
                <animated.h1
                  className="home__title-h1" style={props} children={'Ethan Marsh'}
                />
            }
          </Transition>
        </div>

        <Transition
          native
          from={{ transform: 'translate3d(-100%,0,0)', opacity: 0 }}
          enter={{ transform: 'translate3d(0,0,0)', opacity: 1 }}
          leave={{ transform: 'translate3d(100%,0,0)', opacity: 0 }}
          config={{ ...config.molasses, duration: 800 }}
        >
          {() => (props =>
            <animated.div style={props} className="home__divider" children={<hr/>} />
          )}
        </Transition>

        <Transition
          native
          from={{ transform: 'translate3d(0,-2rem,0)', opacity: 0 }}
          enter={{ transform: 'translate3d(0,0,0)', opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ ...config.molasses }}
          delay={800}>
          {() => (props =>
            <animated.div className="home__bottom" style={props}>
            <div className="home__bottom-row">
              <h2 className="home__bottom-subtitle" >
                Front-End Web Developer / San Francisco
              </h2>
              <ButtonMore
                className="home__bottom-more"
                onClick={e => this.scrollToAbout(e.currentTarget)}
              >
                &or;
              </ButtonMore>
              </div>
              <div className="home__bottom__links" >
                <Social />
              </div>
            </animated.div>
          )}
        </Transition>

      </Fragment>
    );
  }
}

const ButtonMore = styled.button`
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    color: #6bf;
  }
`;
