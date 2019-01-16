import React, { Component } from "react";
import styled, { css } from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import Grid from "./styles/Grid";

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
  border-bottom: 1px solid transparent;

  ${props =>
    props.headerIsScrolled &&
    css`
      background-color: #fff;
      border-color: #ccc;
    `};
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
    return (
      <StyledHeader
        headerIsScrolled={this.state.headerIsScrolled}
        height={headerHeight}
      >
        <Logo headerIsScrolled={this.props.headerIsScrolled} />
        <Nav {...this.props} />
      </StyledHeader>
    );
  }
}
