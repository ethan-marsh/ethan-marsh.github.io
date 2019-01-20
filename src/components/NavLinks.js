import React, { Component, Fragment } from "react";
import styled, {css} from "styled-components";

const LinkNav = styled.a`
  :link,
  :visited {
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

  :hover,
  :active {
    opacity: 1;
  },

  ${props => props.on && css`
  &:link,
  &:visited {
    font-size: 1.6rem;
    line-height: 3rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    letter-spacing: 1.5px;
    position: relative;

    &::after {
        content: "";
        width: 2rem;
        height: 2px;
        background-color: #FFF;
        opacity: 1;
        position: absolute;
        bottom: 40%;
        left: -4.5rem;
    }
  `}

`;

const nav = ["home", "about", "background", "work"];

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
