import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Meta from "./Meta";
import Header from "./Header";

const theme = {
  blue: "#005DB3",
  black: "#000000",
  white: "#FFFFFF",
  grey: "#3A3A3A",
  darkblue: "#02243C",
  lightblue: "#5195CE",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1440px",
  fontPrimary: "'Helvetica Neue', 'Open Sans', sans-serif;",
  fontDisplay: "'Raleway', sans-serif",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0;
  font-family: ${props => props.theme.fontPrimary};
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
`;

createGlobalStyle`
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
    padding: 0;
    margin: 0;
  }
  a:link, a:visited {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
