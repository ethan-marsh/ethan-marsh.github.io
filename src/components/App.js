import React, { Component } from "react";

//* COMPONENTS *//
import Logo from "./Logo";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

//* STYLES *//
import "../sass/main.scss";

// --- APP START --- //
class App extends Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.aboutRef = React.createRef();
  }

  state = {
    nav: ["home", "about", "experience", "folio"],
    activeLink: "home",
    aboutPosition: 0,
    headerHeight: 0,
    homeOffset: 100,
  };

  componentDidMount = () => {
    // Add scroll event listener to window
    window.addEventListener('scroll', this.handleScroll);
    // Update the header height state
    this.getHeaderHeight(this.headerRef.current);
  }

  componentWillUnmount = () => {
    // Remove scroll listener from window
    window.removeEventListener('scroll', this.handleScroll);
  }

  activateLink = activeLink => {
    // Activate nav link item
    this.setState({ activeLink });
  };

  // Get bottom position of the header
  getHeaderHeight = (headerNode) => {
    const headerPos = headerNode.getBoundingClientRect(),
          headerHeight = headerPos.bottom;
    this.setState({ headerHeight });
  }

  // Keep the state updated with the top of the about position
  getAboutPosition = (node) => {
    const posObj = node.getBoundingClientRect(),
          top =  Math.floor(posObj.top);
    this.setState({ aboutPosition: top });
  }

  // Get amount to move home section
  transformSection = (windowHeight) => {
    const homeOffset = Math.floor(this.state.aboutPosition / windowHeight * 100); // get a round number
    if(homeOffset > 0) {
      this.setState({ homeOffset });
    } else
        this.setState({ homeOffset: 0 }); // don't keep setting it once it's out of view
    }

  handleScroll = (e) => {
    // Keep aboutPosition state updated
    this.getAboutPosition(this.aboutRef.current);
    // Update padding top while home in view
    this.transformSection(e.currentTarget.innerHeight);

    // Toggle class when about position reaches header height
    if (this.state.aboutPosition < this.state.headerHeight) {
      this.headerRef.current.classList.add('header--scrolled');

   } else
     this.headerRef.current.classList.remove('header--scrolled');
  }

  render() {
    return (
      <div className="app" >
        <header id="header" className="header" ref={this.headerRef} >
          <Logo />
          <Nav
            nav={this.state.nav}
            activeLink={this.state.activeLink}
            activateLink={this.activateLink}
          />
        </header>
          <Home
            aboutPosition={this.state.aboutPosition}
            homeOffset={this.state.homeOffset}
          />

        <div className="content">

          <section id="about" className="background" ref={this.aboutRef}>
            <About />
          </section>

          <section id="experience" className="experience">
            <Experience />
          </section>

          <section id="portfolio" className="portfolio">
            <Portfolio />
          </section>

          <footer id="footer" className="footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;