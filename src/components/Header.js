import React, { Component } from "react";
import styled, { css } from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import Grid from "./styles/Grid";
import {ScrollContext} from "./scroll-context";

const StyledHeader = styled(Grid).attrs({
  as: "header"
})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: ${props => props.height || "8rem"}; /*use unit when using*/
  max-height: 8rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.borderColor};
  background-color: ${props => props.bg};

  /*${props =>
    props.headerIsScrolled &&
    css`
      background-color: #fff;
      border-color: #ccc;
    `};*/
`;

const headerHeight = `8rem`;

class Header extends Component {
  render() {
    let props = this.props;
    return (
      <ScrollContext.Consumer>
        {({ theme }) => (
          <StyledHeader
          headerIsScrolled={false}
          height={headerHeight}
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
