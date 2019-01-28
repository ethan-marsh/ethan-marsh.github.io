import React from 'react';

const ClientContext = React.createContext({
  scrollY: 0,
  wHeight: 0,
  wWidth: 0,
});

export default ClientContext;
