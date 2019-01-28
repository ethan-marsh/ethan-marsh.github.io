import React from 'react';
import styled from 'styled-components';
import { mediaMin, absolute } from '../styles/utils';
import { StyledLogo } from './Logo.animated';

const LogoImage = styled.img.attrs({
  alt: 'Ethan Logo',
  title: 'ethan marsh website',
  src: 'images/logo-dark.png',
})`
  max-width: 14rem;
  max-height: 3rem;
  ${absolute({})};
  overflow-y: hidden;
  ${mediaMin.tablet`display: none`}
`;

const LogoStatic = () => (
  <StyledLogo>
    <a href="/">
      <LogoImage />
    </a>
  </StyledLogo>
);

export default LogoStatic;

LogoImage.displayName = 'StaticLogo';
