import React, { Fragment } from 'react';
import styled from 'styled-components';

// background-color: #fff
// color: #555

const AboutParagraphs = styled.p`
  margin-bottom: 3rem
    line-height: 1.5em

    :last-child {
    margin-bottom: 3em;
  }
`;

const AboutContent = ({ aboutText }) => (
  <Fragment>
    {Object.keys(aboutText).map(key => (
      <AboutParagraphs key={key}>{aboutText[key]}</AboutParagraphs>
    ))}
  </Fragment>
);

export default AboutContent;
