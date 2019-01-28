import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavContext } from './nav-context';

const NavContextProvider = (ComposedComponent) => {
  class NavProvider extends Component {
    constructor(props) {
      super(props);

      this.updateActiveNavLink = (activeNavLink) => {
        this.setState({ activeNavLink });
      };

      this.updateSectionHeight = (navIndex, height) => {
        // Copy state
        /* eslint-disable-next-line */
        const sectionHeights = { ...this.state.sectionHeights };
        // Update the passed section
        sectionHeights[navIndex] = Math.floor(height);
        // Set the new state with heights
        this.setState({ sectionHeights });
      };

      this.state = {
        nav: ['home', 'about', 'background', 'work'],
        activeNavLink: 'home',
        sectionHeights: [window.innerHeight - 80, 0, 0, 0],
        updateActiveNavLink: this.updateActiveNavLink,
        updateSectionHeight: this.updateSectionHeight,
      };
    }

    render() {
      const {
        nav,
        activeNavLink,
        sectionHeights,
        updateSectionHeight,
        updateActiveNavLink,
      } = this.state;
      const { ...passThroughProps } = this.props;
      return (
        <NavContext.Provider
          value={{
            nav,
            activeNavLink,
            sectionHeights,
            updateSectionHeight,
            updateActiveNavLink,
          }}
        >
          <ComposedComponent {...passThroughProps} />
        </NavContext.Provider>
      );
    }
  }
  return NavProvider;
};

NavContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavContextProvider;
