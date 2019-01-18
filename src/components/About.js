import React, { Component } from "react";
import styled from "styled-components";
import { Section, SectionContent, SectionTitle } from "./styles/Section";
// eslint-disable-next-line
import { aboutText, aboutSkills } from "Data";
import {ScrollContext, themes} from './scroll-context';

const SectionAbout = styled(Section)`
  background-color: #fff;
  color: #555;

  p {
    margin-bottom: 3rem;
    line-height: 1.5em
    &:last-child {
      margin-bottom: 3em;
    }
  }
`;

export default class About extends Component {
  // constructor(props) {
  //   super(props);

  //   this.toggleTheme = () => {
  //     console.log('Theme was toggled');
  //     this.setState(state => ({
  //       theme:
  //       state.theme === themes.initial
  //       ? themes.scrolled
  //       : themes.initial,
  //     }));
  //   };

  //   this.handleScroll = () => {
  //     console.log('working...take me off please');

  //   }

  //   this.state = {
  //     theme: themes.initial,
  //     toggleTheme: this.toggleTheme,
  //   };
  // }

  // componentDidMount = () => {
  //   window.addEventListener("scroll", this.handleScroll);
  // };

  // componentWillUnmount = () => {
  //   window.removeEventListener("scroll", this.handleScroll);
  // };

  render() {
    const { forwardedRef, ...rest } = this.props;
    return (
        <SectionAbout ref={forwardedRef} {...rest}>
        <SectionTitle>
          <h3>{this.props.title}</h3>
        </SectionTitle>
        <SectionContent>
          {Object.keys(aboutText).map(key => (
            <p key={key}>{aboutText[key]}</p>
          ))}
        </SectionContent>
        </SectionAbout>
    );
  }
}

/* <div className="about__bars bars">
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
          </div> */

//           .bars {
//   margin: 2rem auto;

//   & __bar {
//     width: 100 %;
//     background - color: #eee;
//     border - radius: 20rem;
//     line - height: 0.5rem;
//     position: relative;

//     &:: before {
//       content: "";
//       position: absolute;
//       bottom: 0;
//       border - top - left - radius: 20rem;
//       border - bottom - left - radius: 20rem;
//       background - color: #27ccc0;
//       height: 0.4rem;
//     }

//     @include fill - bar(70);
//     @include fill - bar(80);
//     @include fill - bar(90);

//     & -label {
//       display: flex;
//       padding - bottom: 0.4rem;
//       align - content: center;
//       justify - content: space - between;
//     }
//   }
// }
