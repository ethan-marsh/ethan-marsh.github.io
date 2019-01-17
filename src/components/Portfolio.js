import React, { Component } from "react";
import styled from "styled-components";
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
  categories = ["All", ...uniqueCategories];

export default class Portfolio extends Component {
  state = {
    category: "All"
  };

  handleClick = e => {
    const category = e.currentTarget.name;
    this.setState({ category });
  };

  filterProjects = () => {
    if (this.state.category === "All") {
      return projects;
    } else {
      return Object.values(projects).filter(
        project => project.category === this.state.category
      );
    }
  };

  render() {
    const projectArr = this.filterProjects();

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
          {Object.keys(projectArr).map(key => (
            <Project
              key={key}
              title={projectArr[key].title}
              rowSpan={projectArr[key].span["row"]}
              colSpan={projectArr[key].span["col"]}
              imgSrc={`images/${projectArr[key].img}`}
              link={projectArr[key].link}
              category={projectArr[key].category}
              desc={projectArr[key].desc}
            />
          ))}
        </ProjectsGrid>
      </Section>
    );
  }
}
