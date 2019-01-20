import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Meta from "./Meta";
import Header from "./Header";
import {ScrollContext, themes} from "./scroll-context";

const theme = {
  blue: "#005DB3",
  black: "#000000",
  white: "#FFFFFF",
  grey: "#3A3A3A",
  lightgrey: "#CCCCCC",
  darkblue: "#02243C",
  lightblue: "#5195CE",
  offWhite: "#EDEDED",
  maxWidth: "1440px",
  fontPrimary: "'Helvetica Neue', 'Open Sans', sans-serif;",
  fontDisplay: "'Raleway', sans-serif",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  fwNormal: "300",
  background: '#FFFFFF',
};

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    height: 0;
    overflow: scroll;
    padding: 0;
    margin: 0;
    font-family: ${theme.fontPrimary};
    font-weight: ${theme.fwNormal};
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
    color: ${theme.white};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
    font-family: ${theme.fontDisplay};
    font-weight: ${theme.fwNormal};
`;

class Page extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = e => {
      const windowHeight = e.currentTarget.innerHeight,
        scrollY = e.currentTarget.scrollY,
        scrollYPosition = Math.floor(windowHeight - scrollY);

      this.setState({
        scrollYPosition,
        theme:
        scrollYPosition < 80
        ? themes.scrolled
        : themes.initial,
        scrollPercent:
          scrollYPosition > 0
          ? ( Math.floor((scrollY / windowHeight) * 100))
          : 0,
      });
    };

    this.toggleHeaderTheme = () => {
      this.setState(state => ({
          theme:
          state.theme === themes.initial
          ? themes.scrolled
          : themes.initial,
      }));
    };

    this.state = {
      theme: themes.initial,
      toggleTheme: this.toggleTheme,
      scrollYPosition: 0,
      scrollPercent: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { children } = this.props,
        childrenWithProps = React.cloneElement(children, { ...this.state  });

    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <GlobalStyle />
          <ScrollContext.Provider value={ this.state }>
            <Header />
          </ScrollContext.Provider>
            <Inner>
              { childrenWithProps }
            </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;