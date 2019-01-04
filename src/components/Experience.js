import React, { Component, Fragment } from "react";

const jobs = {
  job1: {
    title: "Penske Motor Group",
    years: 3,
    yearSpan: "2017-19",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consectetur adipisci veritatis nobis, autem quibusdam dicta aspernatur magni porro, Neque voluptates aliquid impedit."
  },
  job2: {
    title: "Penske Motor Group",
    years: 1,
    yearSpan: "2015-16",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consectetur adipisci veritatis nobis, autem quibusdam dicta aspernatur magni porro, Neque voluptates aliquid impedit."
  },
  job3: {
    title: "MBUSA",
    years: 1,
    yearSpan: "2014-15",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consectetur adipisci veritatis nobis, autem quibusdam dicta aspernatur magni porro, Neque voluptates aliquid impedit."
  }
};

const certifications = {
  cert1: {
    title: "Harvard CS50",
    time: "2018"
  },
  cert2: {
    title: "B.S, University of California, Davis",
    time: "2014"
  }
};

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
                <h5 className="time__title">{jobs[key].years} Years</h5>
                <p className="time__sub">{jobs[key].yearSpan}</p>
                <h5 className="description__title">{jobs[key].title}</h5>
                <p className="description__sub">{jobs[key].description}</p>
              </li>
            ))}
            {Object.keys(certifications).map(key => (
              <li
                className="experience__item experience__item--certs"
                key={key}
              >
                <h5 className="time__title">{certifications[key].time}</h5>
                <h5 className="description__title">
                  {certifications[key].title}
                </h5>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}
