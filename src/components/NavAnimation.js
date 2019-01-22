import React, { Component } from 'react'
import { Keyframes, animated } from 'react-spring'
import styled from 'styled-components'
import { mediaMax } from './styles/utilities'
import { LinkNav } from './NavLinks'
import {ScrollContext, nav} from './scroll-context'

const NavMobileUl = styled.ul`
    padding-left: 4.5rem;
    list-style: none;
`;

const LinkNavMobile = styled(LinkNav)`
${mediaMax.tablet`
  &:link,
  &:visited {
    font-size: 1.6rem;
    line-height: 3rem;
    font-family: 'Open Sans', sans-serif;

    letter-spacing: 1.5px;
    position: relative;
    opacity: ${props => props.active ? `1` : `0.6`};

    &::after {
        content: "";
        width: 2rem;
        height: 2px;
        background-color: ${props => props.active ? `#FFF` : `#111`};
        opacity: 1;
        position: absolute;
        bottom: 40%;
        left: -4.5rem;
    }

    &:active::after {
        background-color: #fff;

    }
  }

  &:hover,
  &:active {
    opacity: 1;
  }`
    };
`;

const NavItems = Keyframes.Trail({
    peek: [
        { x: 0, opacity: 1, from: { x: 100, opacity: 0 }, delay: 600 },
        { x: 0, opacity: 0, delay: 0 },
    ],
    open: { x: 0, opacity: 1, delay: 100 },
    close: { x: 100, opacity: 0, delay: 0 },
});

export default class AnimatedMobileNav extends Component {
    render() {
        let on =
            this.props.on === null
                ? 'peek'
                : this.props.on
                    ? 'open'
                    : 'close';
        return (
            <NavMobileUl>
                <NavItems
                    native
                    items={nav.links}
                    keys={nav.links.map((_, i) => i)}
                    reverse={!this.props.on}
                    state={on}>
                    {(item, i) => ({ x, ...props }) => (
                        <animated.li
                            style={{
                                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                                ...props,
                            }}>
                            <ScrollContext.Consumer>
                                {( {activeNavLink} ) => (
                            <LinkNavMobile
                                {...this.props}
                                name={item}
                                href={item === 'home' ? '#' : `#${item}`}
                                onClick={e => this.setState({ active: e.currentTarget.name})}
                                active={activeNavLink === item}
                            >
                                {item}
                            </LinkNavMobile>
                                )}
                            </ScrollContext.Consumer>
                        </animated.li>
                    )}
                </NavItems>
            </NavMobileUl>
        )
    }
}