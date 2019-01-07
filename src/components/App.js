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
  state = {
    nav: ["home", "about", "experience", "folio"],
    activeLink: "home",
    bgPos: 0
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  activateLink = activeLink => {
    this.setState({ activeLink });
  };

  handleScroll = (e) => {
   const scrollY = e.currentTarget.scrollY;
   const innerHeight = e.currentTarget.innerHeight;

   if (scrollY >= (innerHeight - 81)) {
  // Home is 100vh minus headerHeight w/ border
    document.querySelector('header').classList.add('header--scrolled');
   } else {
     document.querySelector('header').classList.remove('header--scrolled');
   }
  }

  render() {
    return (
      <div className="app" >
        <header id="header" className="header">
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

          <section id="about" className="background">
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