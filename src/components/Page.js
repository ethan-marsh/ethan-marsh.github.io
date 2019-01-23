import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import GlobalStyle, { theme } from 'utils/global';
import { ScrollContext, themes, nav } from './scroll-context';

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0;
`;

class Page extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = e => {
      const windowHeight = e.currentTarget.innerHeight, //client height
        scrollY = e.currentTarget.scrollY, // scrollY
        scrollYPosition = Math.floor(windowHeight - scrollY); // scroll relative to client height

      this.setState({
        scrollY,
        scrollYPosition,
        theme: scrollYPosition < 80 ? themes.scrolled : themes.initial,
        scrollPercent:
          scrollYPosition > 0 ? Math.floor((scrollY / windowHeight) * 100) : 0
      });
    };

    this.toggleHeaderTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.initial ? themes.scrolled : themes.initial
      }));
    };

    this.updateActiveNav = activeNavLink => {
      this.setState({ activeNavLink });
    };

    this.updateSectionHeight = (navIndex, height) => {
      const sectionHeights = { ...this.state.sectionHeights };
      sectionHeights[navIndex] = height;
      this.setState({ sectionHeights });
    };

    this.state = {
      theme: themes.initial,
      toggleTheme: this.toggleTheme,
      scrollY: 0,
      scrollYPosition: 0,
      scrollPercent: 0,
      nav: nav.links,
      activeNavLink: nav.activeLink,
      updateActiveNav: this.updateActiveNav,
      updateSectionHeight: this.updateSectionHeight,
      sectionHeights: [
        window.innerHeight - 80, //hero - header
        0, //about
        0, //background
        0 //work
      ]
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { children } = this.props;
    const childrenWithProps = React.cloneElement(children, { ...this.state });

    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <GlobalStyle />
          <ScrollContext.Provider value={this.state}>
            <Header />
          </ScrollContext.Provider>
          <Inner>{childrenWithProps}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
