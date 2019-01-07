import React, { Component } from "react";

//* COMPONENTS *//
import Header from "./Header";
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
    activeLink: "home"
  };

  activateLink = activeLink => {
    this.setState({ activeLink });
  };

  render() {
    return (
      <div className="app">
        <header id="header" className="header">
          <Header />
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