import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import HeroComponent from './Hero.component';
import Grid from '../styles/Grid';
import { mediaMax } from '../styles/utils';

const StyledSection = styled(Grid).attrs({
  as: animated.section,
})`
  position: fixed;
  height: 100vh;
  z-index: -100;
  will-change: transform;
  backface-visibility: hidden;
  ${mediaMax.tablet`
    top: 6rem;
    height: 95vh;
  `}
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${props => props.bgurl});
  background-size: cover;
  background-position: top left;
  color: ${props => props.theme.white};
  backface-visibility: hidden;

  & > div:first-child {
    display: flex;
    grid-column: 2/-2;
    flex-direction: column;
    justify-content: center;
    margin-top: -8rem;
    position: relative;
  }

  h1 {
    font-size: 4vw;
    letter-spacing: 0.5px;
    margin-bottom: 1.5rem;
    font-weight: 300;
    ${mediaMax.tablet`font-size: 5.2vw; letter-spacing: .5px;`};
    ${mediaMax.phone`font-size: 6vw`};
  }
`;

const springConfig = {
  tension: 0,
  friction: 0,
  mass: 2,
  precision: 0.1,
};

const AnimatedWrapper = ({
  y, handleClick, titleMain, titleSub, bgurl,
}) => (
  <Spring native to={{ transY: y }} config={springConfig}>
    {props => (
      <StyledSection
        bgurl={bgurl}
        style={{ transform: props.transY.interpolate(y => `translate3d(0,-${y}%,0)`) }}
      >
        <HeroComponent handleClick={handleClick} titleMain={titleMain} titleSub={titleSub} />
      </StyledSection>
    )}
  </Spring>
);

export default AnimatedWrapper;

AnimatedWrapper.propTypes = {
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleClick: PropTypes.func.isRequired,
  titleMain: PropTypes.string.isRequired,
  titleSub: PropTypes.string,
  bgurl: PropTypes.string.isRequired,
};

AnimatedWrapper.defaultProps = {
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  titleSub: '',
};
