import React, { Component, Fragment } from "react";
import {aboutText, aboutSkills} from "Data";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="background-left">
          <h4 className="background__title-h4">Background.</h4>
        </div>
        <div className="background-right">
          <div className="background__text">
            {Object.keys(aboutText).map(key => (
            <p key={key}>
              {aboutText[key]}
            </p>
            ))}
          </div>
          <div className="background__bars bars">
            <div className="bars__bar-label">
              <span className="bars__bar-label--text">HTML5</span>
              <span className="bars__bar-label--pct">80%</span>
            </div>
            <div className="bars__bar bars__bar--pct-80">&nbsp;</div>
          </div>
          <div className="background__bars bars">
            <div className="bars__bar-label">
              <span className="bars__bar-label--text">CSS3</span>
              <span className="bars__bar-label--pct">70%</span>
            </div>
            <div className="bars__bar bars__bar--pct-70">&nbsp;</div>
          </div>
          <div className="background__bars bars ">
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
