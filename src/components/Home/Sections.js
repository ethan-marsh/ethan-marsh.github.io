import React from 'react';
import styled from 'styled-components';
import SectionConsumer from 'components/Section';
import Background from 'components/Background';
import Experience from 'components/Experience';
import Portfolio from 'components/Portfolio';
import measureItem from 'helpers/measureItem';
import Grid from '../styles/Grid';
import { mediaMax } from '../styles/utils';

const StyledSections = styled(Grid)`
  grid-auto-flow: row;
  grid-auto-rows: auto-fill;
  justify-items: stretch;
  align-items: stretch;
  position: absolute;
  top: 100vh;
  ${mediaMax.tablet`
    top: 95vh;
  `}
  left: 0;
  z-index: 99;
`;

// Give sections the measurement props to compare
const Section = measureItem(SectionConsumer);

const Sections = ({ forwardedRef, children, props }) => (
  <StyledSections ref={forwardedRef} {...props}>
    <Section id="background" title="background" index={1}>
      <Background />
    </Section>

    <Section id="experience" title="experience" index={2}>
      <Experience />
    </Section>

    <Section id="portfolio" title="portfolio" index={3}>
      <Portfolio />
    </Section>

    {children}
  </StyledSections>
);

export default Sections;

Sections.propTypes = {};
