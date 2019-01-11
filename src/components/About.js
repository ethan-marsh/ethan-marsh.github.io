import React, { Component, Fragment } from "react";
// eslint-disable-next-line
import { aboutText, aboutSkills } from "data";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="section__title">
          <h3 className="section__title-h3">About.</h3>
        </div>
        <div className="section__content">
          <div className="about__text">
            {Object.keys(aboutText).map(key => (
              <p key={key}>{aboutText[key]}</p>
            ))}
          </div>
          <div className="about__bars bars">
            <div className="bars__bar-label">
              <span className="bars__bar-label--text">HTML5</span>
              <span className="bars__bar-label--pct">80%</span>
            </div>
            <div className="bars__bar bars__bar--pct-80">&nbsp;</div>
          </div>
          <div className="about__bars bars">
            <div className="bars__bar-label">
              <span className="bars__bar-label--text">CSS3</span>
              <span className="bars__bar-label--pct">70%</span>
            </div>
            <div className="bars__bar bars__bar--pct-70">&nbsp;</div>
          </div>
          <div className="about__bars bars ">
            <div className="bars__bar-label">
              <span className="bars__bar-label--text">Javscript</span>
              <span className="bars__bar-label--pct">90%</span>
            </div>
            <div className="bars__bar bars__bar--pct-90">&nbsp;</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
