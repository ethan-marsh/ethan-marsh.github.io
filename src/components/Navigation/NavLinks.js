import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { NavContext, nav } from 'contexts/NavContext';
import { mediaMax } from '../styles/utils';

export const LinkNav = styled.a`
  &:link,
  &:visited {
    font-family: ${props => props.theme.fontPrimary};
    font-size: 1.1rem;
    line-height: 1.5em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;
    transition: opacity 0.2s ease-out;
    color: ${props => props.color};
    opacity: ${props => (props.active ? '1' : '0.6')};
  }
  ${mediaMax.tablet`
    &:hover,
	&:active {
		opacity: 1;
	}
    `}
`;

export default class NavLinks extends Component {
  state = {
    active: 'home',
  };

  render() {
    return (
      <Fragment>
        {nav.map(link => (
          <li key={link}>
            <NavContext.Consumer>
              {({ activeNavLink }) => (
                <LinkNav
                  name={link}
                  href={link === 'home' ? '#' : `#${link}`}
                  active={link === activeNavLink}
                  onClick={e => this.setState({ active: e.currentTarget.name })}
                  children={link}
                />
              )}
            </NavContext.Consumer>
          </li>
        ))}
      </Fragment>
    );
  }
}
