import React from 'react';
import styled from 'styled-components';
import Grid from 'components/styles/Grid';
import Project from './Project';

export const StyledFolioSection = styled(Grid).attrs({
  as: 'section',
  id: 'portfolio',
})`
  padding: 10rem 0;
  font-size: 1.4rem;
  background-color: white;

  grid-column: span 12;
`;

const ProjectGrid = styled.div`
  grid-column: 2 / -2;
  grid-row-start: 2;
  background-color: ${props => props.theme.white}
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-auto-rows: 10vw;
  grid-auto-flow: dense;
  }
`;

const ProjectsGrid = ({ newProjects }) => (
  <ProjectGrid>
    {Object.keys(newProjects).map(key => (
      <Project
        key={key}
        title={newProjects[key].title}
        rowSpan={newProjects[key].span.row}
        colSpan={newProjects[key].span.col}
        imgSrc={`images/${newProjects[key].img}`}
        link={newProjects[key].link}
        category={newProjects[key].category}
        desc={newProjects[key].desc}
      />
    ))}
  </ProjectGrid>
);

export default ProjectsGrid;
