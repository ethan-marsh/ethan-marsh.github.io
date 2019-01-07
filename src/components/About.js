import React, { Component, Fragment } from "react";

export default class About extends Component {
  componentDidMount = () => {
    this.section = document.querySelector('.background-left');
  }

  getPosition = (e) => {
    const sectionPosition = e.currentTarget.parentNode.parentNode.getBoundingClientRect();
    console.log(sectionPosition);
  }


  render() {
    return (
      <Fragment>
        <div className="background-left">
          <h4 className="background__title-h4" onClick={this.getPosition}>Background.</h4>
        </div>
        <div className="background-right">
          <div className="background__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate quam vero eligendi odit nostrum numquam ratione,
              officia quidem inventore magni libero perspiciatis esse provident
              quisquam, mollitia eveniet ex cumque voluptatibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate quam vero eligendi odit nostrum numquam ratione,
              officia quidem inventore magni libero perspiciatis esse provident
              quisquam, mollitia eveniet ex cumque voluptatibus?
            </p>
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
