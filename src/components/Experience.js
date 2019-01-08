import React, { Component, Fragment } from "react";

import { jobs, certifications } from "Data";

export default class Experience extends Component {
  render() {
    return (
      <Fragment>
        <div className="experience-left">
          <h4 className="experience__title-h4">Experience.</h4>
        </div>
        <div className="experience-right">
          <ul className="experience__list">
            {Object.keys(jobs).map(key => (
              <li className="experience__item" key={key}>
                <h5 className="time__title-h5">{jobs[key].years} Years</h5>
                <p className="time__sub">{jobs[key].yearSpan}</p>
                <h5 className="description__title-h5">{jobs[key].title}</h5>
                <p className="description__sub">{jobs[key].description}</p>
              </li>
            ))}
            {Object.keys(certifications).map(key => (
              <li
                className="experience__item experience__item--certs"
                key={key}
              >
                <h5 className="time__title-h5">{certifications[key].time}</h5>
                <h5 className="description__title-h5">
                  {certifications[key].title}
                </h5>
                {certifications[key].description &&
                  (
                    <p className="description__sub" style={{transform: 'translateY(-1rem)'}}>{certifications[key].description}</p>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}
