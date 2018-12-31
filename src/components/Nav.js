import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";

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
        <nav className="nav navigation nav-block primary-navigation">
          <ul className="nav__links">
            {this.props.nav.map(link => (
              <li className="nav__item" key={link}>
                <NavLink
                  href={`#${link}`}
                  name={link}
                  className="nav__link"
                  active={this.props.activeLink === link}
                  onClick={e => this.props.activateLink(e.currentTarget.name)}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Fragment>
    );
  }
}

const NavLink = styled.a`
  opacity: 0.6;

  ${props =>
    props.active &&
    css`
      opacity: 9;
    `}
`;
