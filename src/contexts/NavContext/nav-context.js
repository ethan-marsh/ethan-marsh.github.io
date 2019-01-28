import React from 'react';

export const nav = ['home', 'background', 'experience', 'portfolio'];

export const NavContext = React.createContext({
  nav,
  activeNavLink: 0,
  updateActiveNavLink: () => {},
  sectionHeights: [],
  updateSectionHeight: () => {},
});
