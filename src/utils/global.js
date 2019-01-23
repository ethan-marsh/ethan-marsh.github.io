import { createGlobalStyle } from 'styled-components';

export const theme = {
  blue: '#005DB3',
  black: '#000000',
  white: '#FFFFFF',
  grey: '#3A3A3A',
  lightgrey: '#CCCCCC',
  darkblue: '#02243C',
  lightblue: '#5195CE',
  offWhite: '#EDEDED',
  maxWidth: '1440px',
  fontPrimary: "'Helvetica Neue', 'Open Sans', sans-serif;",
  fontDisplay: "'Raleway', sans-serif",
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  fwNormal: '300',
  background: '#FFFFFF'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
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

export default GlobalStyle;
