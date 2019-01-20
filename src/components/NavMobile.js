import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import NavLinks from './NavLinks';
import Social from './Social';
import media, { absolute } from './styles/utilities';


const WrapperButton = styled.button`
@media only screen and (min-width: 1024px) {
    display: none;
}
position: fixed;
top: 1rem;
${media.tablet`right: 6rem;`}
${media.phone`right: 4rem;`}
${media.smallest`right: 3rem`}
height: 5rem;
width: 2rem;
z-index: 1000;
display: flex;
  border: none;
  outline: none;
  background-color: transparent;
  opacity: .7;
  transition: opacity .3s ease-out;

  &:hover {
      opacity: 1;
      cursor: pointer;
  }
  `;

const StyledNavButton = styled.div`
position: relative;
align-self: center;
height: 2px;
width: 100%;
border: none;
outline: none;
background-color: ${props => props.theme.black}
border-radius: 5rem;

&::before, &::after {
    content: "";
    ${absolute({})}
    height: 2px;
    width: 100%;
    border-radius: 5rem;
    background-color: ${props => props.theme.black}
    transform-origin: center;
    transition: transform .2s ease;
}

&::before {
transform: translate3d(0, -.5rem, 0);
}
&::after {
transform: translate3d(0, .5rem, 0);

}

${props => props.on && css`
background-color: #111;

&::before {
    transform: rotate(45deg) ;
    background-color: #666;
}
&::after {
    transform: rotate(-45deg) ;
    background-color: #666;
}
`}
`;

const NavWrapper = styled.aside`
    position: fixed;
    right: 0px;
    height: 100%;
    padding: 0;
    width: 30rem;
    text-align: left;
    background: ${props => props.theme.darkgrey || '#111'};
    transition: transform .5s cubic-bezier(0.86, 0, .07, 1);
    overflow: hidden;
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

const NavMobileUl = styled.ul`
    padding-left: 4.5rem;
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
        on: false,
    }

    toggle = () => {
        this.setState(prevState => ({
            on: !prevState.on
        }));
    }

    render() {
        let { on } = this.state;
        return (
            <>
                <WrapperButton onClick={this.toggle}>
                    <StyledNavButton on={on} />
                </WrapperButton>
                {on && (
                    <NavWrapper>
                        <NavInner>
                            <NavMobileUl>
                                <NavLinks on={on} />
                            </NavMobileUl>
                            <NavFooter>
                                <Social />
                                <p>&copy; 2019 Ethan Marsh</p>
                            </NavFooter>
                        </NavInner>
                    </NavWrapper>
                )}
            </>
        )
    }
}

export default NavMobile;

