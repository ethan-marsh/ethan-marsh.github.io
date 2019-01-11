import React from "react";
import styled, { css } from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import { Grid } from "./styles/Grid";

const StyledHeader = styled(Grid)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: transparent;
  height: ${props => props.height || "8rem"}; /*use unit when using*/
  max-height: 8rem;
  align-items: center;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease-out;
  ${props =>
    props.headerIsScrolled &&
    css`
      background-color: #fff;
      border-color: #ccc;
    `};
`;

const Header = React.forwardRef((props, ref) => (
  <StyledHeader
    as="header"
    ref={ref}
    className="header"
    headerIsScrolled={props.headerIsScrolled}
    height={props.headerHeight}
  >
    <Logo headerIsScrolled={props.headerIsScrolled} />
    <Nav {...props} />
  </StyledHeader>
));

export default Header;
