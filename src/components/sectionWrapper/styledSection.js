import React from 'react';
import styled from 'styled-components';
import Grid from '../styles/Grid';
import { mediaMax } from '../styles/utils';

const StyledSectionWrapper = styled(Grid).attrs({
  as: 'section'
})`
  grid-column: span 12;
  padding: 10rem 0;
  font-size: 1.4rem;
  background-color: white;
  ${mediaMax.tablet`
    row-gap: 2rem;
    `}
`;
const StyledSectionTitle = styled.div`
  grid-column: 2 / 5;
  ${mediaMax.tablet`
    grid-column: 2 / -2;
    grid-row: 1 / span 1;
    `}
  h3 {
    font-size: 2.2rem;
    text-transform: uppercase;
    :after {
      content: '.';
    }
  }
`;
const StyledSectionContent = styled.div`
  grid-column: 5 / -2;
  ${mediaMax.tablet`
      grid-column: 2 / -2;
      grid-row-start: 2;
      `}
  h5 {
    font-size: 1.4rem;
    line-height: 1.1em;
    margin-bottom: 0.25em;
  }
`;

const StyledSection = ({ children, measureRef, title, ...rest }) => (
  <StyledSectionWrapper ref={measureRef} {...rest}>
    <StyledSectionTitle>
      <h3>{title}</h3>
    </StyledSectionTitle>
    <StyledSectionContent>{children}</StyledSectionContent>
  </StyledSectionWrapper>
);

export default StyledSection;
