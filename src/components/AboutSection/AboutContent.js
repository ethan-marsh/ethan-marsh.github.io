import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';

const StyledAboutSection = styled(Section)`
  background-color: #fff
  color: #555

  p {
    margin-bottom: 3rem
    line-height: 1.5em

    :last-child {
      margin-bottom: 3em;
    }
  }
`;

const AboutContent = ({ aboutText }) => (
  <StyledAboutSection>
    {Object.keys(aboutText).map(key => (
      <p key={key}>{aboutText[key]}</p>
    ))}
  </StyledAboutSection>
);

export default AboutContent;
