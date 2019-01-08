import React, { Component } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 10rem 0;
`;

const H3 = styled.h3`
  grid-column: 2 / 5;
  font-size: 2.2rem;
  text-transform: uppercase;
`;

const SectionContent = styled.div`
  grid-column: 5 / -2;
`;

export default class Section extends Component {
  render() {
    return (
      <StyledSection id={this.props.id} className={this.props.className}>
        <H3 children={this.props.id} />
        <SectionContent>
          {({prop1, prop2}) => (
            prop1 prop2
          )}
        </SectionContent>
      </StyledSection>
    );
  }
}
