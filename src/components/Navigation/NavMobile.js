import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { WrapperButton, StyledNavButton } from '../styles/NavButton';
import NavAnimation from './NavAnimation';
import SocialLinks from '../SocialLinks';
import { mediaMin } from '../styles/utils';

const NavWrapper = styled.aside`
  position: fixed;
  right: 0px;
  height: 100%;
  padding: 0;
  width: 30rem;
  text-align: left;
  background: ${props => props.theme.darkgrey || '#111'};
  transform: translate3d(30rem, 0, 0);
  transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  overflow: hidden;

  ${props =>
    props.on &&
    css`
      transform: translate3d(0, 0, 0);
    `}

  ${mediaMin.tablet`display:none`};
`;

const NavInner = styled.nav`
  width: 30rem;
  height: 100%;
  padding-top: 8rem;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  left: 0;
`;

const NavFooter = styled.div`
  color: #666;
  font-size: 1.1rem;
  line-height: 3;
  width: 100%;
  padding: 1rem 4.5rem;
  position: absolute;
  bottom: 0;
`;

class NavMobile extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState(prevState => ({
      on: !prevState.on
    }));
  };

  render() {
    const { on } = this.state;
    return (
      <>
        <WrapperButton onClick={this.toggle}>
          <StyledNavButton on={on} />
        </WrapperButton>
        <NavWrapper on={on}>
          <NavInner>
            <NavAnimation on={on} />
            <NavFooter>
              <SocialLinks />
              <p>&copy; 2019 Ethan Marsh</p>
            </NavFooter>
          </NavInner>
        </NavWrapper>
      </>
    );
  }
}

export default NavMobile;
