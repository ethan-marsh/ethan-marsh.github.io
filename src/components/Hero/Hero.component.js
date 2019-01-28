import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition, animated, config } from 'react-spring';
import SocialIcons from 'components/SocialIcons';
import { mediaMax } from '../styles/utils';
import ScrollDownButton from './ScrollDownButton';

const StyledRow = styled(animated.div)`
  padding: 2rem 0;

  h2 {
    font-size: 2vw;
    margin-bottom: 2rem;
    font-weight: 400;
    ${mediaMax.tablet`font-size: 3vw`};
    ${mediaMax.phone`font-size: 4vw`};
    color: ${props => props.theme.lightgrey};
  }
`;
const SubRow = ({ titleSub }) => {
  const transitionProps = {
    native: true,
    from: { transform: 'translate3d(0,-2rem,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0,0)', opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.molasses },
    delay: '1000',
  };
  // SUBTITLE & ICONS //
  return (
    <Transition {...transitionProps}>
      {() => props => (
        <StyledRow style={props}>
          <h2>{titleSub}</h2>
          <SocialIcons />
        </StyledRow>
      )}
    </Transition>
  );
};

const Title = ({ titleMain }) => {
  const transitionProps = {
    native: true,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.default },
    delay: '1000',
  };
  /* H1 */
  return (
    <Transition {...transitionProps}>
      {() => props => <animated.h1 style={props}>{titleMain}</animated.h1>}
    </Transition>
  );
};

function Divider() {
  const transitionProps = {
    native: true,
    from: { transform: 'scaleX(3)', opacity: 0 },
    enter: { transform: 'scaleX(1)', opacity: 0.5 },
    leave: { transform: 'scaleX(0)', opacity: 0 },
    config: { ...config.default },
    delay: '1000',
  };
  // ------------//
  return (
    <Transition {...transitionProps}>{() => props => <animated.hr style={props} />}</Transition>
  );
}

// COMPOSER
const HeroComponent = ({ handleClick, titleMain, titleSub }) => (
  <div>
    <Title titleMain={titleMain} />
    <Divider />
    <SubRow titleSub={titleSub} />
    <ScrollDownButton handleClick={handleClick} />
  </div>
);

HeroComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
  titleMain: PropTypes.string.isRequired,
  titleSub: PropTypes.string,
};

HeroComponent.defaultProps = {
  titleSub: '',
};

export default HeroComponent;
