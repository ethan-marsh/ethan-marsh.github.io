import React, { Component } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Project from "./Project";
import { Section } from "./styles/Section";
import { projects } from "../data";

const StyledCategories = styled.ul`
  grid-column: 2 / -2;
  grid-row: span 1;
  list-style-type: none;
  margin: 0;
  padding: 2rem 0;
  li {
    display: inline-block;
    :not(:first-child) {
      margin-left: 5vw;
    }
  }
`;
const StyledCategory = styled.button`
  color: ${props => props.theme.grey};
  font-family: ${props => props.theme.fontDisplay};
  font-size: 1.25rem;
  font-weight: ${props => props.theme.fw};
  text-transform: capitalize;
  background: none;
  border: none;
  outline: none;
  opacity: ${props => (props.selected ? 1 : 0.6)};
  transition: opacity 0.3s ease-out;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const ProjectsGrid = styled.div`
  grid-column: 2 / -2;
  grid-row-start: 2;
  background-color: ${props => props.theme.lightgrey}
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-auto-rows: 10vw;
  grid-auto-flow: dense;
`;

const eachCategory = Object.values(projects).map(project => project.category),
  uniqueCategories = new Set(eachCategory),
  categories = ["all", ...uniqueCategories];

export default class Portfolio extends Component {
  state = {
    category: "all",
    projects: projects
  };

  handleClick = e => {
    const category = e.currentTarget.name;
    this.setState({ category });
    this.filterProjects({ category });
  };

  filterProjects = category => {
    if (category === "all") {
      this.setState({ projects });
    } else {
      const filteredProjects = Object.values(projects).filter(
        project => project.category === category
      );
      this.setState({ projects: filteredProjects });
    }
  };

  render() {
    return (
      <Section {...this.props}>
        <StyledCategories>
          {categories.map(category => (
            <li key={category}>
              <StyledCategory
                name={category}
                onClick={this.handleClick}
                children={category}
                selected={category === this.state.category}
              />
            </li>
          ))}
        </StyledCategories>
        <ProjectsGrid>
          <TransitionGroup>
            {Object.keys(this.state.projects).map(key => (
              <CSSTransition
                key={`project-${key}`}
                timeout={500}
                classNames="fade"
              >
                <Project
                  title={this.state.projects[key].title}
                  rowSpan={this.state.projects[key].span["row"]}
                  colSpan={this.state.projects[key].span["col"]}
                  imgSrc={`images/${this.state.projects[key].img}`}
                  link={this.state.projects[key].link}
                  category={this.state.projects[key].category}
                  desc={this.state.projects[key].desc}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ProjectsGrid>
      </Section>
    );
  }
}
