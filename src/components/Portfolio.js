import React, { Component, Fragment } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      <Fragment >
          <ul className="porfolio__categories">
          {['All', 'Professional','Personal','Playground'].map(link => (
              <li key={link}><a className="portoflio__link" href="#">{link}</a></li>
              ))}
            </ul>

          <div className="portfolio__projects projects">
          <a href="#" className="projects-link">
              <figure className="projects-figure"></figure> </a>
              <a href="#" className="projects-link"> <figure className="projects-figure"></figure> </a>
              <a href="#" className="projects-link">
              <figure className="projects-figure"></figure> </a>

          </div>
      </Fragment>
    )
  }
}
