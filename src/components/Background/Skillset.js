import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #bada55;
`;

const Skillset = ({ skills }) => (
  <div>
    {skills.map(skill => (
      <li>{skill}</li>
    ))}
  </div>
);

export default Skillset;

Skillset.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
};
