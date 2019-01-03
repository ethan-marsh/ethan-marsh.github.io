import React, { Component, Fragment } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <ul className="portfolio__categories">
          {["All", "Professional", "Personal", "Playground"].map(link => (
            <li key={link}>
              <a className="portfolio__link" href={`#${link}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="portfolio__projects projects">
          {[1, 2, 3, 4, 5, 6].map(projectNum => (
            <a
              key={projectNum}
              href={`#project-${projectNum}`}
              className="projects-link"
            >
              <figure className="projects-figure">
                <img
                  src={`images/project-${projectNum}.jpg`}
                  alt={`Project ${projectNum}`}
                />
                <figcaption>
                  <h5>{`Project ${projectNum}`}</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </Fragment>
    );
  }
}
