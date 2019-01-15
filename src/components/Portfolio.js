import React, { Component } from "react";
import { Section } from "./styles/Section";

import "../sass/_portfolio.scss";

export default class Portfolio extends Component {
  handleProjectClick = e => {
    const project = e.currentTarget.parentNode;

    // Make selection active
    project.classList.toggle("project--is-active");

    // Remove the active class from anything
    // other than selected
    Array.from(project.parentNode.children).forEach(
      project =>
        !e.currentTarget && project.classList.remove("project--is-active")
    );
  };

  render() {
    const { ...props } = this.props;
    return (
      <Section {...props}>
        <ul className="portfolio__categories">
          {["All", "Professional", "Personal", "Playground"].map(link => (
            <li key={link}>
              <a className="portfolio__link" href={`#${link}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="portfolio__projects">
          {[1, 2, 3, 4, 5, 6].map(projectNum => (
            <figure
              className={`project project--${projectNum}`}
              key={projectNum}
            >
              <img
                src={`images/project-${projectNum}.jpg`}
                alt={`Project ${projectNum}`}
                className="project__image"
              />
              <button
                className="project__button"
                onClick={this.handleProjectClick}
              >
                Learn More
              </button>
              <figcaption className="project__text">
                <h5 className="project__title-h5">{`Project ${projectNum}`}</h5>
                <p className="project__description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    );
  }
}
