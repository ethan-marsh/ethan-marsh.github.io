import React, { Component, Fragment } from "react";
/* eslint-disable-next-line */
import { Spring } from "react-spring";

//* COMPONENTS *//
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
// import Experience from "./Experience";
// import Portfolio from "./Portfolio";
// import Footer from "./Footer";

//* STYLES *//
import "../styles/main.scss";

// Don't import after here

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
      <Fragment>
        <header id="header" className="header">
          <Header />
          <Nav
            nav={this.state.nav}
            activeLink={this.state.activeLink}
            activateLink={this.activateLink}
          />
        </header>
        <section id="home" className="home">
          <Home />
        </section>

        <div className="app">
          <div className="content">
            <About />
            <section id="experience" className="experience">
              EXPERIENCE
            </section>
            <section id="folio" className="folio">
              PORTFOLIO
            </section>
            <footer id="footer" className="footer">
              FOOTER
            </footer>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
