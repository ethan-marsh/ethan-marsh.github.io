import React, { Component } from "react";
import styled, { css } from "styled-components";
import {absolute} from './styles/utilities'
const StyledLogo = styled.div`
  grid-column: 2 / 6;
  ${absolute({})};
  top: 35%;
  `;

  const LogoImage = styled.img`
  width: 13vw;
  height: auto;
  ${absolute({})};
  max-height: 8rem;
  overflow-y: hidden;
  transition: all 0.3s ease-out;
`;

const LogoDark = styled(LogoImage).attrs({
  src: "images/logo-dark.png",
  alt: "Ethan",
  title: "ethanmarsh.com"
})`
  opacity: 0;
  transform: translate3d(0, 4rem, 0);
  ${props =>
    props.up &&
    css`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `}
`;

const LogoLight = styled(LogoImage).attrs({
  src: "images/logo-light.png",
  alt: "Ethan",
  title: "ethanmarsh.com"
})`
  opacity: 1;
  transform: translate3d(0, 0, 0);
  ${props =>
    props.up &&
    css`
      transform: translate3d(0, -4rem, 0);
      opacity: 0;
    `}
`;

export default class Logo extends Component {
  render() {
    return (
      <StyledLogo>
        <a href="/">
          <LogoLight up={this.props.headerIsScrolled} />
          <LogoDark up={this.props.headerIsScrolled} />
        </a>
      </StyledLogo>
    );
  }
}
