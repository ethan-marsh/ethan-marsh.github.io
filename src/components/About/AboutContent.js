import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// background-color: #fff

const AboutParagraphs = styled.p`
  margin-bottom: 3rem
  line-height: 1.5em
  color: #555
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

AboutContent.propTypes = {
  aboutText: PropTypes.objectOf(PropTypes.string),
};
AboutContent.defaultProps = {
  aboutText: '',
};

export default AboutContent;
