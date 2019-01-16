import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Meta from "./Meta";
import Header from "./Header";

const theme = {
  blue: "#005DB3",
  black: "#000000",
  white: "#FFFFFF",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  darkblue: "#02243C",
  lightblue: "#5195CE",
  offWhite: "#EDEDED",
  maxWidth: "1440px",
  fontPrimary: "'Helvetica Neue', 'Open Sans', sans-serif;",
  fontDisplay: "'Raleway', sans-serif",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  fwNormal: "300"
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
    padding: 0;
    margin: 0;
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
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <GlobalStyle />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
