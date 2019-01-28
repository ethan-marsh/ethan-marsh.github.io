import React from 'react';

export const NavContext = React.createContext({
  nav: ['home', 'about', 'background', 'portfolio'],
  activeNavLink: 0,
  updateActiveNavLink: () => {},
  sectionHeights: [],
  updateSectionHeight: () => {},
});
