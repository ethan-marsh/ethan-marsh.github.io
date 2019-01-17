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
  color: ${props => props.theme.gray};
  font-family: ${props => props.theme.fontDisplay};
  font-size: 1.25rem;
  font-weight: ${props => props.theme.fw};
  background: none;
  border: none;
  outline: none;
  opacity: 0.6;
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

const categories = ["All", "Professional", "Personal", "Playground"];

const cats = Object.values(projects);

export default class Portfolio extends Component {
  handleClick = e => {
    console.log(e.currentTarget.name);
  };

  componentDidMount = () => {
    console.log(cats);
  };

  render() {
    const { ...props } = this.props;
    return (
      <Section {...props}>
        <StyledCategories>
          {categories.map(category => (
            <li key={category}>
              <StyledCategory
                name={category}
                onClick={this.handleClick}
                children={category}
              />
            </li>
          ))}
        </StyledCategories>
        <ProjectsGrid>
          {Object.keys(projects).map(key => (
            <Project
              key={key}
              title={projects[key].title}
              rowSpan={projects[key].span["row"]}
              colSpan={projects[key].span["col"]}
              imgSrc={`images/${projects[key].img}`}
              link={projects[key].link}
              category={projects[key].category}
              desc={projects[key].desc}
            />
          ))}
        </ProjectsGrid>
      </Section>
    );
  }
}
