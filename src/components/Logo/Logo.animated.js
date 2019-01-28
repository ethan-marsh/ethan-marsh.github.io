import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Spring, animated, config, interpolate,
} from 'react-spring';
import { mediaMax, mediaMin, absolute } from '../styles/utils';

export const StyledLogo = styled.div`
  grid-column: 2 / 6;
  ${absolute({})};
  top: 35%;
`;

const LogoImage = styled(animated.img).attrs({
  alt: 'Ethan Logo',
  title: 'ethan marsh website',
})`
  max-width: 14rem;
  max-height: 3rem;
  ${absolute({})};
  overflow-y: hidden;

  ${mediaMin.tablet`will-change: transform, opacity`}
`;

const LogoDark = styled(LogoImage).attrs({
  src: 'images/logo-dark.png',
})``;

const LogoLight = styled(LogoImage).attrs({
  src: 'images/logo-light.png',
})`
  ${mediaMax.tablet`display: none`}
`;

const LogoAnimated = ({ on }) => (
  <StyledLogo>
    <a href="/">
      <Spring
        native
        config={{ ...config.stiff }}
        from={{
          o: '-1',
          transY: on ? '3' : '0',
        }}
        to={{
          o: on ? '1' : '0',
          transY: on ? '0' : '4',
        }}
      >
        {({ transY, o }) => (
          <LogoDark
            style={{
              opacity: o,
              transform: interpolate([transY], y => `translate3d(0,${y}rem, 0)`),
            }}
          />
        )}
      </Spring>
      <Spring
        native
        config={{ ...config.stiff }}
        from={{
          o: '-1',
          transY: on ? '-4' : '0',
        }}
        to={{
          o: on ? '0' : '1',
          transY: on ? '-4' : '0',
        }}
      >
        {({ transY, o }) => (
          <LogoLight
            style={{
              opacity: o,
              transform: interpolate([transY], y => `translate3d(0,${y}rem, 0)`),
            }}
          />
        )}
      </Spring>
    </a>
  </StyledLogo>
);

LogoLight.displayName = 'WhiteLogo';
LogoDark.displayName = 'DarkLogo';

export default LogoAnimated;

LogoAnimated.propTypes = {
  on: PropTypes.bool,
};
LogoAnimated.defaultProps = {
  on: false,
};
