import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '../styles/utils';

const StyledJobItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  ${mediaMax.tablet`flex-direction: column;`}
  font-size: 1.3rem;
  letter-spacing: 0.5px;

  h5 {
    color: ${props => props.theme.white};
    &:last-of-type {
      ${props => (props.type === 'cert'
    ? `${mediaMax.tablet`margin-top: .5rem;`}`
    : `${mediaMax.tablet`margin-top: 1.5rem;`}`)}
    }
  }

  div:first-child {
    flex: 1;
    ${mediaMax.tablet`font-size: 1.2rem`}
  }
  div:last-child {
    flex: 1 1 40%;
  }

  a {
    text-decoration: underline;
  }
`;

const ExperienceComponent = ({ jobs }) => (
  <ul style={{ listStyle: 'none' }}>
    {Object.keys(jobs).map(key => (
      <StyledJobItem key={key}>
        <div>
          <h5>
            {jobs[key].years < 2000
              ? `${jobs[key].years} Year${jobs[key].years > 1 ? 's' : ''}`
              : jobs[key].years}
          </h5>
          <p>{jobs[key].yearSpan}</p>
        </div>
        <div>
          <h5>{jobs[key].title}</h5>
          <p style={{fontStyle: key === `job2` ? `italic` : `none`}}>{jobs[key].description}</p>
          {key === `job2` && (<p>-- Annual Performance Review</p>)}
        </div>
      </StyledJobItem>
    ))}
      <StyledJobItem>
        <div>
          <h5 />
          <p />
        </div>
        <div>
          <h5>Resume</h5>
          <a href="https://docs.google.com/document/d/1vlSZztThpXMG4ahei63d9ALQT7wwoIUF-NIWN6EYGmM/">View Full Resume</a>
        </div>
      </StyledJobItem>
  </ul>
);

export default ExperienceComponent;
