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
    headerHeight: 0
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.getHeaderHeight(this.headerRef.current);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  activateLink = activeLink => {
    this.setState({ activeLink });
  };

  getHeaderHeight = (headerNode) => {
    const headerPos = headerNode.getBoundingClientRect(),
          headerHeight = headerPos.bottom;
    this.setState({ headerHeight });
  }

  getAboutPosition = (aboutNode) => {
    const aboutPos = aboutNode.getBoundingClientRect(),
          aboutPosition =  aboutPos.top;
    this.setState({ aboutPosition });
  }

  handleScroll = (e) => {
   const scrollY = e.currentTarget.scrollY;
  //  const innerHeight = e.currentTarget.innerHeight;
   const aboutPosition = this.getAboutPosition(this.aboutRef.current);

   if (this.state.aboutPosition < this.state.headerHeight) {
    this.headerRef.current.classList.add('header--scrolled');
   } else
    this.headerRef.current.classList.remove('header--scrolled');
  }

  changeHeaderClass = (e) => {
    console.log(e);
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

        <div className="content">
          <section id="home" className="home">
            <Home />
          </section>

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