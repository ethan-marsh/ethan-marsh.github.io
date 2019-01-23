import React from 'react';
import { Transition, config } from 'react-spring';

const transitionConfig = {
  native,
  from: { opacity: 1 },
  to: { opacity: 0 },
  config: { ...config.default },
  leave: { opacity: 1 }
};

const TransitionWrapper = props => (
  <Transition {...transitionConfig}>{props.children}</Transition>
);

export default TransitionWrapper;
