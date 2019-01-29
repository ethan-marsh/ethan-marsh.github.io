import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skillset from './Skillset';

const Paragraphs = styled.p`
  margin-bottom: 3rem
  line-height: 1.5em
  color: #555
:last-child {
    margin-bottom: 3em;
  }
`;

const BackgroundComponent = ({ intro, skills }) => (
  <Fragment>
    <div>
      {Object.keys(intro).map(key => (
        <Paragraphs key={key}>{intro[key]}</Paragraphs>
      ))}
    </div>
    <Skillset skills={skills} />
  </Fragment>
);

BackgroundComponent.propTypes = {
  into: PropTypes.objectOf(PropTypes.string),
  skills: PropTypes.objectOf(PropTypes.string),
};
BackgroundComponent.defaultProps = {
  into: '',
  skills: {},
};

export default BackgroundComponent;
