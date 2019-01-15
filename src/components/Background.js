import React, { Component } from "react";
import styled from "styled-components";
import { Section, SectionContent, SectionTitle } from "./styles/Section";
import { jobs } from "data";
import { absolute } from "./styles/utilities";

const SectionBackground = styled(Section)`
  position: relative;
  background-color: #222;
  color: #ddd;
  z-index: -2;

  ::before {
    ${absolute({})};
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
    z-index: -1;
  }
`;

const StyledJobItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  h5 {
    color: white;
  }
  div:first-child {
    flex: 1;
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
