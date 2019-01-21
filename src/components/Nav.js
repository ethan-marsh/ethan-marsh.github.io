import React, { Component, Fragment } from "react"
import styled from "styled-components"
import NavLinks from "./NavLinks"
import NavMobile from "./NavMobile"
import {mediaMax} from "./styles/utilities"

const StyledNav = styled.nav`
	grid-column: 6 / -2;
  text-align: right;

  ${mediaMax.tablet`display: none`}
`;

const StyledNavLinksUl = styled.ul`
	display: flex;
	justify-content: flex-end;
	list-style: none;

	& li:not(:first-child) {
		margin-left: 3rem;
	}
`;

export default class Nav extends Component {
	render() {
		return (
			<Fragment>
				<NavMobile />
				<StyledNav>
					<StyledNavLinksUl>
						<NavLinks {...this.props} />
					</StyledNavLinksUl>
				</StyledNav>
			</Fragment>
		);
	}
}
