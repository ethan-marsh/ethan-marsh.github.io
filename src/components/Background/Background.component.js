import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paragraphs = styled.p`
  margin-bottom: 3rem
  line-height: 1.5em
  color: #555
:last-child {
    margin-bottom: 3em;
  }
`;

const BackgroundComponent = ({ aboutText }) => (
  <Fragment>
    {Object.keys(aboutText).map(key => (
      <Paragraphs key={key}>{aboutText[key]}</Paragraphs>
    ))}
  </Fragment>
);

BackgroundComponent.propTypes = {
  aboutText: PropTypes.objectOf(PropTypes.string),
};
BackgroundComponent.defaultProps = {
  aboutText: '',
};

export default BackgroundComponent;
