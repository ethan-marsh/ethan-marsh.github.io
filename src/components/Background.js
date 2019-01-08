import React, { Component, Fragment } from "react";

import { jobs, certifications } from "Data";

export default class Background extends Component {
  render() {
    return (
      <Fragment>
        <div className="section__title">
          <h3 className="section__title-h3">Background.</h3>
        </div>
        <div className="section__content">
          <ul className="background__list">
            {Object.keys(jobs).map(key => (
              <li className="background__item" key={key}>
                <h5 className="time__title-h5">{jobs[key].years} Years</h5>
                <p className="time__sub">{jobs[key].yearSpan}</p>
                <h5 className="description__title-h5">{jobs[key].title}</h5>
                <p className="description__sub">{jobs[key].description}</p>
              </li>
            ))}
            {Object.keys(certifications).map(key => (
              <li
                className="background__item background__item--certs"
                key={key}
              >
                <h5 className="time__title-h5">{certifications[key].time}</h5>
                <h5 className="description__title-h5">
                  {certifications[key].title}
                </h5>
                {certifications[key].description && (
                  <p
                    className="description__sub"
                    style={{ transform: "translateY(-1rem)" }}
                  >
                    {certifications[key].description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}
