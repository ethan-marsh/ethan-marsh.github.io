import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import NavMobile from './NavMobile';
import { mediaMax } from '../styles/utils';

const StyledNav = styled.nav`
  grid-column: 6 / -2;
  text-align: right;

  ${mediaMax.tablet`display: none`}
`;

const StyledNavLinksUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;

  & li:not(:first-child) {
    margin-left: 3rem;
  }
`;

const Nav = ({ on }) => (
  <>
    <NavMobile />
    <StyledNav>
      <StyledNavLinksUl>
        <NavLinks on={on} />
      </StyledNavLinksUl>
    </StyledNav>
  </>
);

export default Nav;
