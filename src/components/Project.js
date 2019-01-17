import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.a`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
  place-items: center center;
  grid-row: span ${props => props.rowSpan};
  grid-column: span ${props => props.colSpan || 1};
  overflow: hidden;

  &.fade-enter {
    opacity: 0.01;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }

  img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
  }
  &:hover img {
    transform: scale(1.5);
  }
`;

const ProjectOverlay = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5% 20%;
  font-size: 1.4rem;
  opacity: 0;
  transition: opacity 0.5s ease-out;

  :hover {
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

const Project = props => (
  <ProjectContainer
    isInView={props.isInView}
    className="fade"
    href={props.link}
    rowSpan={props.rowSpan}
    colSpan={props.colSpan}
    category={props.category}
  >
    <img src={props.imgSrc} alt={props.title} />
    <ProjectOverlay>
      <h6>{props.title}</h6>
      <p>{props.desc}</p>
    </ProjectOverlay>
  </ProjectContainer>
);

export default Project;
