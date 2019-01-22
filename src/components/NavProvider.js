import React, { Component } from 'react'
import {NavContext, nav} from './nav-context'

const NavProvider = (NavComponent) => class NavProvider extends Component {
	constructor(props){
		super(props);

		this.setActiveLink = (link) => {
			this.setState(state => ({
				activeLink: link
			}))
		}

		this.getHeight = (component) => {
			if(component.props.height) {
				return component.props.height
			}
		}

		this.state={
			nav: nav,
			activeLink: 0,
			setActiveLink: this.setActiveLink,
		}
	}

	render() {
		return (
			<NavContext.Provider value={this.state}>
				<NavComponent {...this.props} {...this.state} />
			</NavContext.Provider>
		)
	}
}

export default NavProvider;