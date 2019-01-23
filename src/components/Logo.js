import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { absolute } from './styles/utils';

const StyledLogo = styled.div`
  grid-column: 2 / 6;
  ${absolute({})};
  top: 35%;
`;

const LogoImage = styled.img`
  max-width: 12rem;
  max-height: 2rem;

  ${absolute({})};
  overflow-y: hidden;
  transition: all 0.3s ease-out;
`;

const LogoDark = styled(LogoImage).attrs({
  src: 'images/logo-dark.png',
  alt: 'Ethan',
  title: 'ethanmarsh.com'
})`
  @media only screen and (max-width: 1024px) {
    transform: translate3d(0, 0, 0);
    width: 25vw;
  }

  @media only screen and (min-width: 1024px) {
    opacity: 0;
    transform: translate3d(0, 4rem, 0);

    ${props =>
      props.color === 'dark' &&
      css`
        transform: translate3d(0, 0, 0);
        opacity: 1;
      `}
  }
`;

const LogoLight = styled(LogoImage).attrs({
  src: 'images/logo-light.png',
  alt: 'Ethan',
  title: 'ethanmarsh.com'
})`
  @media only screen and (max-width: 1024px) {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    opacity: 1;
    display: block;

    ${props =>
      props.color === 'dark' &&
      css`
        transform: translate3d(0, -4rem, 0);
        opacity: 0;
      `}
  }
`;

export default class Logo extends Component {
  render() {
    let color = this.props.color === '#FFFFFF' ? 'light' : 'dark';
    return (
      <StyledLogo>
        <a href="/">
          <LogoLight color={color} />
          <LogoDark color={color} />
        </a>
      </StyledLogo>
    );
  }
}
