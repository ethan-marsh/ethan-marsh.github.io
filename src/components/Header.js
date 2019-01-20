import React, { Component } from "react";
import styled, { css } from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import Grid from "./styles/Grid";
import {ScrollContext, themes} from "./scroll-context";
import media from "./styles/utilities"

const StyledHeader = styled(Grid).attrs({
  as: "header"
})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 8rem;
  max-height: 8rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.borderColor};
  background-color: ${props => props.bg};
  transition: background-color .4s ease-out;

  ${media.tablet`
    border-color: ${themes.mobile.accent}
    background-color: ${themes.mobile.background}
  `}
`;

class Header extends Component {
  render() {
    let props = this.props;
    return (
      <ScrollContext.Consumer>
        {({ theme }) => (
          <StyledHeader
          bg={theme.background}
          color={theme.foreground}
          borderColor={theme.accent}
        >
          <Logo headerIsScrolled={this.props.headerIsScrolled} color={theme.foreground} />
          <Nav {...props} color={theme.foreground}/>
        </StyledHeader>
        )
      }
      </ScrollContext.Consumer>
    );
  }
}
Header.contextType = ScrollContext;

export default Header;
