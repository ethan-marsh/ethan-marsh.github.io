import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paragraphs = styled.p`
  margin-bottom: 3rem;
  line-height: 1.5em;
  color: #555;
  :last-child {
    margin-bottom: 3em;
  }
`;

const BackgroundComponent = ({ intro }) => (
  <Fragment>
    <div>
      {Object.keys(intro).map(key => (
        <Paragraphs key={key}>{intro[key]}</Paragraphs>
      ))}
    </div>
  </Fragment>
);

BackgroundComponent.propTypes = {
  intro: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default BackgroundComponent;
