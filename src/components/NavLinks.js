import React, { Component, Fragment } from "react";
import styled from "styled-components";

export const LinkNav = styled.a`
    &:link,
    &:visited {
    font-family: ${props => props.theme.fontPrimary};
    font-size: 1.1rem;
    line-height: 1.5em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;
    opacity: 0.6;
    transition: opacity .2s ease-out;
    color: ${props => props.color};
  }

  &:hover,
  &:active {
    opacity: 1;
  }
`;

export const nav = ["home", "about", "background", "work"];

export default class NavLinks extends Component {
    render() {
        return (
            <Fragment>
                {nav.map(link => (
                    <li key={link}>
                        <LinkNav
                            {...this.props}
                            name={link}
                            href={`#${link}`}
                            children={link}
                        />
                    </li>
                ))}
            </Fragment>
        )
  }
}
