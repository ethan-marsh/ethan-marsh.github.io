import React, { Component, Fragment } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      <Fragment >
          <ul className="portfolio__categories">
          {['All', 'Professional','Personal','Playground'].map(link => (
              <li key={link}><a className="portfolio__link" href={`#${link}`}>{link}</a></li>
              ))}
            </ul>
          <div className="portfolio__projects projects">
          <a href="#project" className="projects-link">
              <figure className="projects-figure"><img src="images/hero.jpg" alt="project" /></figure></a>
              <a href="#project" className="projects-link"> <figure className="projects-figure">
              <img src="images/hero.jpg" alt="project" />
              </figure></a>
              <a href="#project" className="projects-link">
              <figure className="projects-figure">
              <img src="images/hero.jpg" alt="project" />
              </figure></a>
              <a href="#project" className="projects-link">
              <figure className="projects-figure">
              <img src="images/hero.jpg" alt="project" />
              </figure></a>

          </div>
      </Fragment>
    )
  }
}
