import styled from 'styled-components';
import Grid from './Grid';
import { mediaMax } from './utils';

const Section = styled(Grid).attrs({
  as: 'section',
})`
  padding: 10rem 0;
  font-size: 1.4rem;
  background-color: white;
  ${mediaMax.tablet`
    row-gap: 2rem;
    `}

  grid-column: span 12;
`;

const StyledSection = styled(Grid).attrs({
  as: 'section',
})`
  padding: 10rem 0;
  font-size: 1.4rem;
  background-color: white;
  ${mediaMax.tablet`
    row-gap: 2rem;
    `}

  grid-column: span 12;
`;

const SectionTitle = styled.div`
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

const SectionContent = styled.div`
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

export {
  Section, StyledSection, SectionTitle, SectionContent,
};
