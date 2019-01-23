import React, { Component } from 'react';
import styled from 'styled-components';
import { Section, SectionContent, SectionTitle } from './styles/Section';
import { jobs } from 'api';
import { mediaMax, absolute } from './styles/utils';
import experienceBg from 'assets/images/experience-bg@0,5x.jpg';

const SectionBackground = styled(Section)`
  position: relative;
  background-color: ${props => props.theme.grey};
  color: #ddd;
  z-index: -2;
  ${mediaMax.tablet`
      padding-top: 35vh;
      `}

  ::before {
    ${mediaMax.biggest`${absolute({})}`}
    content: "";
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      url(${experienceBg});
    background-size: cover;
    filter: brightness(120%);
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 45%;
    ${mediaMax.tablet`
      height: 25vh;
      width: 100%;
      `}
    z-index: -1;
  }
`;

const StyledJobItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  ${mediaMax.tablet`flex-direction: column;`}
  font-size: 1.3rem;
  letter-spacing: 0.5px;

  h5 {
    color: ${props => props.theme.white};
    &:last-of-type {
      ${props =>
        props.type === 'cert'
          ? `${mediaMax.tablet`margin-top: .5rem;`}`
          : `${mediaMax.tablet`margin-top: 1.5rem;`}`}
    }
  }

  div:first-child {
    flex: 1;
    ${mediaMax.tablet`font-size: 1.2rem`}
  }
  div:last-child {
    flex: 1 1 40%;
  }
`;

class Background extends Component {
  state = {
    start: -1
  };
  componentDidMount() {
    this.props.updateSectionHeight(2, this.props.rectHeight);
  }

  // sets nav at either about or background
  componentDidUpdate(prevProps) {
    if (this.props.rectHeight !== prevProps.rectHeight) {
      this.props.updateSectionHeight(2, this.props.rectHeight);
    }
    if (
      this.props.activeNavLink === 'about' &&
      this.props.scrollY > prevProps.scrollY &&
      this.props.scrollY >
        this.props.sectionHeights[0] + this.props.sectionHeights[1]
    ) {
      this.props.updateActiveNav('background');
    } else if (
      this.props.activeNavLink === 'background' &&
      this.props.scrollY < prevProps.scrollY && // scrolling up
      this.props.scrollY <
        this.props.sectionHeights[0] + this.props.sectionHeights[1]
    ) {
      this.props.updateActiveNav('about');
    }
  }

  render() {
    const { measureRef, ...props } = this.props;
    return (
      <SectionBackground {...props} ref={measureRef}>
        <SectionTitle>
          <h3>{this.props.title}</h3>
        </SectionTitle>
        <SectionContent>
          <ul style={{ listStyle: 'none' }}>
            {Object.keys(jobs).map(key => (
              <StyledJobItem key={key}>
                <div>
                  <h5>
                    {jobs[key].years} {jobs[key].years < 2000 ? ' Years' : ''}
                  </h5>
                  <p>{jobs[key].yearSpan}</p>
                </div>
                <div>
                  <h5>{jobs[key].title}</h5>
                  <p>{jobs[key].description}</p>
                </div>
              </StyledJobItem>
            ))}
          </ul>
        </SectionContent>
      </SectionBackground>
    );
  }
}

export default Background;
