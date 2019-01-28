import React from 'react';
import styled, { css } from 'styled-components';
import Portfolio from 'components/Portfolio';
import experienceBg from 'assets/images/experience-bg@0,5x.jpg';
import Grid from '../styles/Grid';
import { mediaMax, absolute } from '../styles/utils';

const StyledSectionWrapper = styled(Grid).attrs({
  as: 'section',
})`
  grid-column: span 12;
  padding: 10rem 0;
  font-size: 1.4rem;
  background-color: white;
  ${mediaMax.tablet`
    row-gap: 2rem;
    `}

  ${props => props.title === 'experience'
  /* SPECIAL SECTION */ && css`
      position: relative;
      background-color: ${props => props.theme.grey};
      color: #ddd;
      z-index: -2;
      ${mediaMax.tablet`
      padding-top: 35vh;
      `}

      ::before {
        ${mediaMax.biggest`${absolute({})}`}
        content: "";
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url(${experienceBg});
        background-size: cover;
        filter: brightness(120%);
        background-position: center;
        background-repeat: no-repeat;
        height: 100%;
        width: 45%;
        ${mediaMax.tablet`
      height: 25vh;
      width: 100%;
      `}
        z-index: -1;
      }
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

const StyledSection = ({
  children, measureRef, title, isPortfolio, ...props
}) => {
  if (isPortfolio) {
    return <Portfolio measureRef={measureRef} />;
  }
  return (
    <StyledSectionWrapper ref={measureRef} title={title} {...props}>
      <StyledSectionTitle>
        <h3>{title}</h3>
      </StyledSectionTitle>
      <StyledSectionContent>{children}</StyledSectionContent>
    </StyledSectionWrapper>
  );
};

export default StyledSection;
