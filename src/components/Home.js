import React, { Component } from "react";
import styled from "styled-components";
import { Transition, animated, config } from "react-spring";

import Social from "./Social";
import { Icon } from "Elements";

export default class Home extends Component {
	scrollToAbout = el => {
		const start = el.getBoundingClientRect();

		// If scroll not activated yet
		let scrollNeeded;
		if (this.props.aboutPosition === 0) {
			scrollNeeded = start.top * 2; // Bring up the below div halfway
		} else {
			scrollNeeded = this.props.aboutPosition - start.top + this.props.homeOffset + 10;
		}

		window.scrollBy({
			top: scrollNeeded,
			left: 0,
			behavior: "smooth",
		});
	};

	render() {
		return (
			<Section
				id="home"
				className="home"
        		homeOffset={this.props.homeOffset}
			>
				<div className="home-inner">
					<div className="home__title">
						<Transition
							native
							items={{ item: true }}
							from={{ opacity: 0 }}
							enter={{ opacity: 1 }}
							leave={{ opacity: 0 }}
							config={{ ...config.molasses }}
						>
							{() => props => (
								<animated.h1
									className="home__title-h1"
									style={props}
									children={"Ethan Marsh"}
								/>
							)}
						</Transition>
					</div>

					<Transition
						native
						from={{ transform: "scaleX(3)", opacity: 0 }}
						enter={{ transform: "scaleX(1)", opacity: .5 }}
						leave={{ transform: "scaleX(0)", opacity: 0 }}
						config={{ ...config.slow }}
					>
						{() => props => (
							<animated.div
								style={props}
								className="home__divider"
								children={<hr />}
							/>
						)}
					</Transition>

					<Transition
						native
						from={{ transform: "translate3d(0,-2rem,0)", opacity: 0 }}
						enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
						leave={{ opacity: 0 }}
						config={{ ...config.molasses }}
						delay={1000}
					>
						{() => props => (
							<animated.div className="home__bottom" style={props}>
								<div className="home__bottom-row">
									<h2 className="home__bottom-subtitle-h2">
										Front-End Web Developer / San Francisco
									</h2>
									<ButtonMore
										className="home__bottom-more"
										onClick={e => this.scrollToAbout(e.currentTarget.parentNode.parentNode)}
									>
										<Icon
											name="arrowDown"
											width="3vw"
											strokeWidth="1"
										/>
									</ButtonMore>
								</div>
								<div className="home__bottom__links">
									<Social />
								</div>
							</animated.div>
						)}
					</Transition>
				</div>
			</Section>
		);
	}
}

const ButtonMore = styled.button`
	color: #fff;
	text-decoration: none;
	background: transparent;
	border: none;
	transition: color .2s ease-out;
	outline: none;
	width: 3vw;

	&:hover,
	&:active {
		cursor: pointer;
		color: #27ccc0;
	}
`;

const Section = styled.section.attrs(props => ({
	homeOffset: props.homeOffset,
}))`
	transform: translate3d(0, ${props => (-2* (100 - props.homeOffset))}px, 0);
	transition: transform linear;
	`;

