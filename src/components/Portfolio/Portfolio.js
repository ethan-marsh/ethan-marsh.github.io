import React, { Component } from 'react';
import { projects } from 'data';
import Categories from './Categories';
import ProjectsGrid, { StyledFolioSection } from './ProjectsGrid';

// Reduce To Only Unique Categories
const eachCategory = Object.values(projects).map(project => project.category);
const uniqueCategories = new Set(eachCategory);
const categories = ['all', ...uniqueCategories];

export default class Portfolio extends Component {
  state = {
    category: 'all',
    projects,
  };

  handleClick = (e) => {
    const category = e.currentTarget.name;
    if (category === 'all') {
      this.setState({ projects, category: 'all' });
    } else {
      const filteredProjects = Object.values(projects).filter(
        project => project.category === category,
      );
      this.setState({ category, projects: filteredProjects });
    }
  };

  render() {
    const { measureRef, ...rest } = this.props;
    const { projects: filteredProjects, category } = this.state;

    return (
      <StyledFolioSection ref={measureRef} {...rest}>
        <Categories categories={categories} handleClick={this.handleClick} catSt={category} />
        <ProjectsGrid projects={filteredProjects} />
      </StyledFolioSection>
    );
  }
}
