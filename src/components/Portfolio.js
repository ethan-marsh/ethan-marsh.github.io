import React, { Component } from "react";
import styled from "styled-components";
import Project from "./Project";
import { Section } from "./styles/Section";
import { projects } from "api";

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
  font-weight: ${props => props.theme.fwNormal};
  text-transform: capitalize;
  background: none;
  border: none;
  outline: none;
  opacity: ${props => props.selected ? '1' : '0.6'};
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
const ProjectsGrid = styled.div`
  grid-column: 2 / -2;
  grid-row-start: 2;
  background-color: ${props => props.theme.white}
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-auto-rows: 10vw;
  grid-auto-flow: dense;
  }
`;

const eachCategory = Object.values(projects).map(project => project.category),
  uniqueCategories = new Set(eachCategory),
  categories = ["all", ...uniqueCategories];

export default class Portfolio extends Component {
  state = {
    category: "all",
    projects: projects,
  }

  handleClick = e => {
    const category = e.currentTarget.name;
    if (category === "all") {
      this.setState({ projects, category: 'all' })
    } else {
      const filteredProjects = Object.values(projects).filter(
        project => project.category === category
      );
      this.setState({ category, projects: filteredProjects });
    }
  }

  componentDidMount() {
    this.props.updateSectionHeight(3, this.props.rectHeight)
  }

  // sets nav at either about or background
  componentDidUpdate(prevProps) {
    if (this.props.rectHeight !== prevProps.rectHeight) {
      this.props.updateSectionHeight(3, this.props.rectHeight)
    }
    if (this.props.activeNavLink === 'background'
      && this.props.scrollY > prevProps.scrollY // scrolling down
      && this.props.scrollY > (this.props.sectionHeights[0] + this.props.sectionHeights[1] + this.props.sectionHeights[2] / 2)
    ) {
      this.props.updateActiveNav('work');
    } else if (this.props.activeNavLink === 'work'
      && this.props.scrollY < prevProps.scrollY) // scrolling up
      if (this.props.scrollY < (this.props.sectionHeights[0] + this.props.sectionHeights[1] + (this.props.sectionHeights[2]))
        && this.props.scrollY > (this.props.sectionHeights[0] + (this.props.sectionHeights[1] + this.props.sectionHeights[2] / 2))) {
        this.props.updateActiveNav('background')

      }
  }

  render() {
    const { measureRef, ...rest } = this.props;
    const newProjects = { ...this.state.projects };

    return (
      <Section ref={measureRef} {...rest}>
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
          {Object.keys(newProjects).map(key => (
            <Project
              key={key}
              title={newProjects[key].title}
              rowSpan={newProjects[key].span["row"]}
              colSpan={newProjects[key].span["col"]}
              imgSrc={`images/${newProjects[key].img}`}
              link={newProjects[key].link}
              category={newProjects[key].category}
              desc={newProjects[key].desc}
            />
          ))}
        </ProjectsGrid>
      </Section>
    );
  }
}
