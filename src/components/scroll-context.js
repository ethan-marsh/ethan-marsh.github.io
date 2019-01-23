import React from 'react';

export const themes = {
  initial: {
    background: 'transparent',
    foreground: '#FFFFFF',
    accent: 'transparent',
  },
  scrolled: {
    background: '#FFFFFF',
    foreground: '#000000',
    accent: '#CCCCCC',
  },
  mobile: {
    background: '#FFFFFF',
    foreground: '#000000',
    accent: '#CCCCCC',
  },
};
export const nav = {
  links: ['home', 'about', 'background', 'work'],
  activeLink: 'home',
};

export const ScrollContext = React.createContext({
  theme: themes.initial,
  toggleTheme: () => {},
  scrollY: 0,
  scrollYPosition: 0,
  scrollPercent: 0,
  nav: nav.links,
  activeNavLink: nav.activeLink,
  updateActiveNav: () => {},
  updateSectionHeight: () => {},
});
