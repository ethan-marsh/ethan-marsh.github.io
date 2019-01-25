import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { ScrollContext } from 'contexts/scroll-context';
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
    opacity: ${props => (props.active ? `1` : `0.6`)};
  }
  ${mediaMax.tablet`
    &:hover,
	&:active {
		opacity: 1;
	}
    `}
`;

const nav = ['home', 'about', 'background', 'work'];
export default class NavLinks extends Component {
  state = {
    active: 'home',
  };

  render() {
    return (
      <Fragment>
        {nav.map(link => (
          <li key={link}>
            <ScrollContext.Consumer>
              {({ activeNavLink }) => (
                <LinkNav
                  {...this.props}
                  name={link}
                  href={link === 'home' ? '#' : `#${link}`}
                  active={link === activeNavLink}
                  onClick={e => this.setState({ active: e.currentTarget.name })}
                  children={link}
                />
              )}
            </ScrollContext.Consumer>
          </li>
        ))}
      </Fragment>
    );
  }
}
