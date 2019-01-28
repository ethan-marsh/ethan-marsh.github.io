import React from 'react';
import { ClientContext } from 'contexts/ClientContext';
import Header from './Header.container';

const HeaderConsumer = ({ ...passThroughProps }) => (
  <ClientContext.Consumer>
    {({ scrollY, wWidth, wHeight }) => (
      <Header scrollY={scrollY} wWidth={wWidth} wHeight={wHeight} {...passThroughProps} />
    )}
  </ClientContext.Consumer>
);

export default HeaderConsumer;
