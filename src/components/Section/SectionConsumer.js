import React from 'react';
import { NavContext } from 'contexts/NavContext';
import { ClientContext } from 'contexts/ClientContext';
import SectionWrapper from './SectionWrapper';

const SectionConsumer = ({ ...passThroughProps }) => (
  <ClientContext.Consumer>
    {scrollY => (
      <NavContext.Consumer>
        {({
          activeNavLink, updateActiveNavLink, sectionHeights, updateSectionHeight,
        }) => (
          <SectionWrapper
            scrollY={scrollY}
            activeNavLink={activeNavLink}
            updateActiveNav={updateActiveNavLink}
            sectionHeights={sectionHeights}
            updateSectionHeight={updateSectionHeight}
            {...passThroughProps}
          />
        )}
      </NavContext.Consumer>
    )}
  </ClientContext.Consumer>
);

export default SectionConsumer;
