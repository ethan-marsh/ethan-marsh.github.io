import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import ClientContextProvider from 'contexts/ClientContext';
import { NavContextProvider } from 'contexts/NavContext';
import { theme } from 'components/styles/global';
import PageComponent from './Page.component';
import Meta from './Meta';

const Provided = props => (
  <>
    <Header />
    <PageComponent>{props.children}</PageComponent>
  </>
);

const wrapProviders = (Comp) => {
  const ClientProvided = ClientContextProvider(Comp);
  const GlobalProvided = NavContextProvider(ClientProvided);

  return GlobalProvided;
};

const Content = wrapProviders(Provided);

class Page extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <Content>{children}</Content>
        </>
      </ThemeProvider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;

// constructor(props) {
//   super(props);

//   this.handleScroll = () => {
//     let timeout;

//     // reset the timer
//     clearTimeout(timeout);

//     // reset it again
//     timeout = setTimeout(() => {
//       const windowHeight = window.innerHeight; // client height
//       const scrollY = window.scrollY; // scrollY
//       const scrollYPosition = Math.floor(windowHeight - scrollY); // scroll relative to client height

//       this.setState({
//         scrollY,
//         scrollYPosition,
//         theme: scrollYPosition < 80 ? themes.scrolled : themes.initial,
//         scrollPercent: scrollYPosition > 0 ? Math.floor((scrollY / windowHeight) * 100) : 0,
//       });
//     }, 50); // only fire 30fps
//   };

//   this.toggleHeaderTheme = () => {
//     this.setState(state => ({
//       theme: state.theme === themes.initial ? themes.scrolled : themes.initial,
//     }));
//   };

//   this.updateActiveNav = (activeNavLink) => {
//     this.setState({ activeNavLink });
//   };

//   this.updateSectionHeight = (navIndex, height) => {
//     const sectionHeights = { ...this.state.sectionHeights }; // Copy state
//     sectionHeights[navIndex] = height; // Update the given section height
//     this.setState({ sectionHeights }); // Set it to state
//   };

//   this.state = {
//     theme: themes.initial,
//     toggleTheme: this.toggleTheme,
//     scrollY: 0,
//     scrollYPosition: 0,
//     scrollPercent: 0,
//     nav: nav.links,
//     activeNavLink: nav.activeLink,
//     updateActiveNav: this.updateActiveNav,
//     updateSectionHeight: this.updateSectionHeight,
//     sectionHeights: [
//       window.innerHeight / 2, // (hero height & in middle of page)[0]
//       0, // about[1]
//       0, // background[2]
//       0, // work[3]
//     ],
//   };
// }

// componentDidMount() {
//   window.addEventListener('scroll', this.handleScroll);
// }

// componentWillUnmount() {
//   window.removeEventListener('scroll', this.handleScroll);
// }
