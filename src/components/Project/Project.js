import React from "react";
import styled from "styled-components";
import { Transition, animated, config } from "react-spring";

const ProjectContainer = styled.a`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
  place-items: center center;
  grid-row: span ${props => props.rowSpan};
  grid-column: span ${props => props.colSpan || 1};
  overflow: hidden;

  img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  backface-visibility: hidden;

    transition: transform 0.5s ease-in;
  }
  &:hover img, &:active img {
    transform: scale(1.5);
  }
`;

const AnimatedContainer = animated(ProjectContainer);

const ProjectOverlay = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  height: 100%;
  position: relative;
  backface-visibility: hidden;

  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5% 20%;
  font-size: 1.4rem;
  opacity: 0;
  transition: opacity 0.5s ease-out;

  :hover, :active {
    opacity: 1;
  }
  h6 {
    font-size: 1em;
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fontDisplay};
    font-weight: ${props => props.theme.fwNormal};
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }
  p {
    font-size: 0.8em;
    color: ${props => props.theme.lightgrey};
  }
`;

class Project extends React.Component {
  render() {
    return (
      <Transition
        native
        initial={{ opacity: .2, transform: 'translate3d(0, 3rem, 0)' }}
        from={{ opacity: 0, transform: 'translate3d(0, 15rem, 0)' }}
        enter={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        leave={{ opacity: .2, transform: 'translate3d(0, -15rem, 0)' }}
        config={{ ...config.slow }}
      >
        {() => props => (
          <AnimatedContainer
            style={props}
            href={this.props.link}
            rowSpan={this.props.rowSpan}
            colSpan={this.props.colSpan}
            category={this.props.category}
          >
            <img src={this.props.imgSrc} alt={this.props.title} />
            <ProjectOverlay>
              <h6>{this.props.title}</h6>
              <p>{this.props.desc}</p>
            </ProjectOverlay>
          </AnimatedContainer>
        )}
      </Transition>
    )
  }
}

export default Project;
