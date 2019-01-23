import React, { Component } from 'react';
import AboutContent from './AboutContent';
import { aboutText } from 'api';
//import { Section, SectionContent, SectionTitle } from '../styles/Section';

// const SectionAbout = styled(Section)`
//   background-color: #fff
//   color: #555

//   p {
//     margin-bottom: 3rem
//     line-height: 1.5em

//     :last-child {
//       margin-bottom: 3em;
//     }
//   }
// `;

class AboutSection extends Component {
  // componentDidMount() {
  //   const { updateSectionHeight } = this.props;
  //   updateSectionHeight(1, this.props.rectHeight);
  // }

  componentDidUpdate(prevProps) {
    const {
      rectHeight,
      updateSectionHeight,
      activeNavLink,
      scrollY,
      sectionHeights,
      updateActiveNav
    } = this.props;
    if (rectHeight !== prevProps.rectHeight) {
      updateSectionHeight(1, rectHeight);
    }
    if (activeNavLink !== 'about' && scrollY > prevProps.scrollY) {
      if (
        scrollY > sectionHeights[0] / 2 &&
        scrollY < sectionHeights[0] + sectionHeights[1]
      ) {
        updateActiveNav('about');
      }
    } else if (
      activeNavLink === 'about' &&
      scrollY < prevProps.scrollY &&
      scrollY < sectionHeights[0]
    ) {
      updateActiveNav('home');
    }
  }

  render() {
    const { ...props } = this.props;
    return <AboutContent aboutText={aboutText} {...props} />;
  }
}

export default AboutSection;

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
