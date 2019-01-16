import React, { Component } from "react";
import styled from "styled-components";
import { Section, SectionContent, SectionTitle } from "./styles/Section";
import { jobs } from "../data";
import media, { absolute } from "./styles/utilities";

const SectionBackground = styled(Section)`
  position: relative;
  background-color: ${props => props.theme.grey};
  color: #ddd;
  z-index: -2;
  ${media.tablet`
      padding-top: 35vh;
      `}

  ::before {
    ${media.biggest`${absolute({})}`}
    content: "";
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05)
      ),
      url("/images/bg-keyboard.jpg");
    background-size: cover;
    filter: brightness(120%);
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 45%;
    ${media.tablet`
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
  ${media.tablet`flex-direction: column;`}
  font-size: 1.3rem;
  letter-spacing: 0.5px;

  h5 {
    color: ${props => props.theme.white};
    &:last-of-type {
      ${props =>
        props.type === "cert"
          ? `${media.tablet`margin-top: .5rem;`}`
          : `${media.tablet`margin-top: 1.5rem;`}`}
    }
  }

  div:first-child {
    flex: 1;
    ${media.tablet`font-size: 1.2rem`}
  }
  div:last-child {
    flex: 1 1 40%;
  }
`;

export default class Background extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <SectionBackground {...props}>
        <SectionTitle>
          <h3>{this.props.title}</h3>
        </SectionTitle>
        <SectionContent>
          <ul style={{ listStyle: "none" }}>
            {Object.keys(jobs).map(key => (
              <StyledJobItem key={key}>
                <div>
                  <h5>
                    {jobs[key].years} {jobs[key].years < 2000 ? " Years" : ""}
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
