import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 5rem;
  letter-spacing: 1px;

  h6 {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 300;
    letter-spacing: 2px;
    padding-left: 1rem;
    margin-bottom: 1rem;
    font-family: ${props => props.theme.fontDisplay};

    span {
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  ul {
    list-style-type: none;

    li {
      font-size: 0.9em;
      display: flex;
      align-items: start;
      padding: 0.6rem 0;

      svg {
        display: inline-block;
        width: 0.7em;
        height: 0.7em;
        border-radius: 50%;
        margin-top: 3px;
        margin-right: 1rem;
        circle {
          fill: ${props => props.f || props.theme.lightblue};
        }
      }
    }
  }
`;

const Skillset = ({ skills }) => (
  <>
    <StyledDiv>
      {Object.entries(skills).map(([type, items]) => (
        <div>
          <h6>
            <span>{type}</span>
          </h6>

          <ul>
            {items.map(skill => (
              <li>
                <svg viewBox="0 0 52 52">
                  <circle cx="26" cy="26" r="25" />
                  <path fill="white" d="M14.1 27.2l7.1 7.2 16.7-16.8" strokeWidth="5" />
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </StyledDiv>
  </>
);

export default Skillset;

Skillset.propTypes = {
  skills: PropTypes.objectOf(PropTypes.string).isRequired,
};
