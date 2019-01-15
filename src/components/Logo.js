import React, { Component } from "react";
import styled, { css } from "styled-components";

const StyledLogo = styled.div`
  grid-column: 2 / 6;
  position: relative;
`;

const LogoImage = styled.img`
  width: 15vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s cubic-bezier(0.11, 0.68, 0.89, 0.99);
`;

const LogoDark = styled(LogoImage).attrs({
  src: "images/logo-dark.png",
  alt: "Ethan",
  title: "ethanmarsh.com"
})`
  opacity: 0;
  transform: translate3d(0, 3rem, 0);
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
      transform: translate3d(0, -3rem, 0);
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
