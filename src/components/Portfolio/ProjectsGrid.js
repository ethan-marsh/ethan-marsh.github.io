import React from 'react';
import PropTypes from 'prop-types';
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
  background-color: ${props => props.theme.white};
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-auto-rows: 10vw;
  grid-auto-flow: dense;
`;

const ProjectsGrid = ({ projects }) => (
  <ProjectGrid>
    {Object.keys(projects).map(key => (
      <Project
        key={key}
        title={projects[key].title}
        rowSpan={projects[key].span.row}
        colSpan={projects[key].span.col}
        imgSrc={`images/${projects[key].img}`}
        link={projects[key].link}
        category={projects[key].category}
        desc={projects[key].desc}
      />
    ))}
  </ProjectGrid>
);
ProjectsGrid.propTypes = {
  projects: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      category: PropTypes.string,
      img: PropTypes.string,
      span: PropTypes.shape({ col: PropTypes.number, row: PropTypes.number }),
      link: PropTypes.string,
      desc: PropTypes.string,
    }),
  ).isRequired,
};

export default ProjectsGrid;
