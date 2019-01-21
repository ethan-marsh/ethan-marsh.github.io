import React, { Component } from 'react'
import styled from "styled-components";
import Grid from "./Grid";
import media from "./utilities";
import styled from "styled-components";


const Section = styled(Grid).attrs({
  as: "section"
})`
  padding: 10rem 0;
  font-size: 1.4rem;
  background-color: white;
  ${media.tablet`
    row-gap: 2rem;
    `}

  grid-column: span 12;
`;

const SectionTitle = styled.div`
  grid-column: 2 / 5;
  ${media.tablet`
    grid-column: 2 / -2;
    grid-row: 1 / span 1;
    `}

  h3 {
    font-size: 2.2rem;
    text-transform: uppercase;
    :after {
      content: ".";
    }
  }
`;

const SectionContent = styled.div`
  grid-column: 5 / -2;
  ${media.tablet`
      grid-column: 2 / -2;
      grid-row-start: 2;
      `}

  h5 {
    font-size: 1.4rem;
    line-height: 1.1em;
    margin-bottom: 0.25em;
  }
`;


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

export default class SectionHOC extends Component {
  render() {
    const { forwardedRef, ...rest } = this.props;
    return (
      <Section ref={forwardedRef} {...rest}>
        <SectionTitle>
          <h3>{this.props.title}</h3>
        </SectionTitle>
        <SectionContent>
          {this.props.children}
        </SectionContent>
        </Section>
    );
  }
}


