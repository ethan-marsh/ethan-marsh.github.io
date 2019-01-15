import React, { Component, Fragment } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  grid-column: 6 / -2;
  text-align: right;
`;

const StyledNavLinksUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;

  & li:not(:first-child) {
    padding-left: 3rem;
  }
`;

const LinkNav = styled.a`
  :link,
  :visited {
    font-family: $font-primary;
    font-size: 1.1rem;
    line-height: 1.5em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;
    opacity: 0.6;
    transition: opacity .2s ease-out;
    color: ${props => (props.headerIsScrolled ? "#000" : "#fff")};
  }

  :hover,
  :active {
    opacity: .9
  },

`;

const nav = ["home", "about", "background", "work"];

export default class Nav extends Component {
  render() {
    return (
      <Fragment>
        {/* <nav className="navigation nav-block secondary-navigation nav-right">
          <ul>
            <li className="aux-navigation hide">
              <a href="#" className="navigation-show side-nav-show nav-icon">
                <span className="icon-menu" />
              </a>
            </li>
          </ul>
        </nav> */}
        <StyledNav>
          <StyledNavLinksUl>
            {nav.map(link => (
              <li key={link}>
                <LinkNav
                  name={link}
                  href={`#${link}`}
                  headerIsScrolled={this.props.headerIsScrolled}
                  children={link}
                />
              </li>
            ))}
          </StyledNavLinksUl>
        </StyledNav>
      </Fragment>
    );
  }
}
