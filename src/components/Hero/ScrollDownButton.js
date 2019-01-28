import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition, animated, config } from 'react-spring';
import Icon from 'components/Icon';
import { mediaMax } from '../styles/utils';

const StyledButton = styled(animated.button)`
  color: ${props => props.theme.lightgrey};
  text-decoration: none;
  background: transparent;
  border: none;
  outline: none;
  width: 3%;
  transition: color 0.2s ease-out;
  position: absolute;
  top: calc(50% + 1rem); /* where h2 sits */
  right: 0;

  &:hover,
  &:active {
    cursor: pointer;
    color: ${props => props.theme.lightblue};
  }

  ${mediaMax.phone`display:none;`}
`;

const IconAnimated = animated(Icon);

function AnimatedIcon() {
  const transitionProps = {
    native: true,
    from: { transform: 'translate3d(0,2rem,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0,0)', opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.molasses },
    delay: '1000',
  };
  return (
    <Transition {...transitionProps}>
      {() => props => <IconAnimated style={props} name="arrowDown" width="5px" strokeWidth="1" />}
    </Transition>
  );
}

const ScrollDownButton = ({ handleClick }) => (
  <StyledButton onClick={e => handleClick(e.currentTarget)}>
    <AnimatedIcon />
  </StyledButton>
);

ScrollDownButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ScrollDownButton;
