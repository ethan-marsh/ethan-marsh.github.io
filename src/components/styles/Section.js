import styled from "styled-components";
import Grid from "./Grid";
import media from "./utilities";

const Section = styled(Grid).attrs({
  as: "section"
})`
  padding: 10rem 0;
  font-size: 1.4rem;
  background-color: white;
  ${media.tablet`
    row-gap: 2rem;
    `}
`;

const SectionTitle = styled.div`
  grid-column: 2 / 5;
  ${media.tablet`
    grid-column: 2 / -2;
    grid-row: 1 / span 1;
    `}

  h3 {
    font-size: 2.2rem;
    text-transform: uppercase;
    :after {
      content: ".";
    }
  }
`;

const SectionContent = styled.div`
  grid-column: 5 / -2;
  ${media.tablet`
      grid-column: 2 / -2;
      grid-row-start: 2;
      `}

  h5 {
    font-size: 1.4rem;
    line-height: 1.1em;
    margin-bottom: 0.25em;
  }
`;

export { Section, SectionTitle, SectionContent };
