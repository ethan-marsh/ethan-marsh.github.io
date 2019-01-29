import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Logo from 'components/Logo';
import Nav from 'components/Navigation';
import Grid from '../styles/Grid';
import { mediaMax } from '../styles/utils';

const StyledHeader = styled(Grid).attrs({
  as: 'header',
})`
  position: fixed;
  z-index: 10000;
  row-gap: 0;
  height: 8rem;
  align-items: center;
  justify-content: space-between;
  color: #555;
  border-bottom: 1px solid transparent;
  background-color: transparent;
  transition: background-color 0.3s ease;

  ${props => props.on
    && css`
      background-color: #ffffff;
      border-color: #cccccc;
    `}

  ${mediaMax.tablet`
    background-color: #ffffff;
    border-color: #cccccc;`};
`;

const HeaderComponent = ({ on, mobile }) => (
  <StyledHeader mobile={mobile} on={on}>
    <Logo mobile={mobile} on={on} />
    <Nav mobile={mobile} on={on} />
  </StyledHeader>
);

HeaderComponent.propTypes = {
  on: PropTypes.bool.isRequired,
  mobile: PropTypes.bool.isRequired,
};

export default HeaderComponent;
