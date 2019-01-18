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

export default class Header extends Component {
  state = {
    isScrolled: false,
    nextDivPos: 0
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    // add scroll event listener to window
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
    // remove scroll listener from window
  };

  getNextDivPosition = node => {
    const posObj = node.getBoundingClientRect(),
      top = Math.floor(posObj.top);
    // maintain state with the top of the about section position
    this.setState({ nextDivPos: top });
  };

  // switch to scroll listenerrr
  handleScroll = e => {
    // call about position set state
    //this.getNextDivPosition(this.aboutRef.current);

    // Toggle class when about position reaches header height
    if (this.state.nextDivPos < headerHeight) {
      this.setState({ headerIsScrolled: true });
    } else this.setState({ headerIsScrolled: false });
  };

  render() {
    let props = this.props;
    return (
      <ScrollContext.Consumer>
        {({theme}) => (
          <StyledHeader
          headerIsScrolled={this.state.headerIsScrolled}
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
