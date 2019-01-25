import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { mediaMax, mediaMin, absolute } from '../styles/utils';

const StyledLogo = styled.div`
  grid-column: 2 / 6;
  ${absolute({})};
  top: 35%;

  // MBPwk
  display: none;
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
  title: 'ethanmarsh.com',
})`
  ${mediaMax.tablet`
    transform: translate3d(0, 0, 0);
    width: 25vw;
  `}

  ${mediaMin.tablet`
    opacity: 0;
    transform: translate3d(0, 4rem, 0);
  `};

  ${props => props.color === 'dark'
    && css`
      ${mediaMin.tablet`
        transform: translate3d(0, 0, 0);
        opacity: 1;
      `}
    `}
`;

const LogoLight = styled(LogoImage).attrs({
  src: 'images/logo-light.png',
  alt: 'Ethan',
  title: 'ethanmarsh.com',
})`
  @media only screen and (max-width: 1024px) {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    opacity: 1;
    display: block;

    ${props => props.color === 'dark'
      && css`
        transform: translate3d(0, -4rem, 0);
        opacity: 0;
      `}
  }
`;

class Logo extends PureComponent {
  render() {
    const { color } = this.props;
    const lightOrDark = color === '#FFFFFF' ? 'light' : 'dark';

    return (
      <StyledLogo>
        <a href="/">
          <LogoLight color={lightOrDark} />
          <LogoDark color={lightOrDark} />
        </a>
      </StyledLogo>
    );
  }
}

Logo.propTypes = {
  color: PropTypes.string,
};
Logo.defaultProps = {
  color: 'dark',
};
LogoLight.displayName = 'WhiteLogo';
LogoDark.displayName = 'DarkLogo';

export default Logo;
