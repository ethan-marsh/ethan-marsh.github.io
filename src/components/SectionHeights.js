import React, { Component } from 'react'
import About from "./About";
import Background from "./Background";
import Portfolio from "./Portfolio";
import MeasureSection from './MeasureSection';

const BackgroundSection = MeasureSection(Background)
const AboutSection = MeasureSection(About)
const PortfolioSection = MeasureSection(Portfolio)

class SectionHeights extends Component {
	state = {
			about: 0,
			background: 0,
			portfolio: 0,
	}

	render() {
		return(
			<>
			<AboutSection ref={this.aboutRef} id="about" title="about" />
			<BackgroundSection ref={this.backgroundRef} id="background" title="background" />
			<PortfolioSection ref={this.portfolioRef} id="work" />
			</>
		)
	}
}

export default SectionHeights;