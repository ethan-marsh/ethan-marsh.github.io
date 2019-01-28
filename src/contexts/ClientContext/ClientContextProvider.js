import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClientContext from './client-context';

const ClientContextProvider = ComposedComponent => class ClientProvider extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = (e) => {
      // let timeout;
      // clearTimeout(timeout);
      // // Start up timer
      // timeout = setTimeout(() => {
      //   // const scrollYPosition = Math.floor(windowHeight - scrollY); // scroll relative to client height

      //   this.setState({
      //     scrollY: window.scrollY,
      //   });
      // }, 20);
      // eslint-disable-next-line
        const scrollY = e.currentTarget.scrollY;
      this.setState({ scrollY });
    };

    this.handleResize = (e) => {
      const { innerHeight, innerWidth } = e.currentTarget;
      this.setState({
        wHeight: innerHeight,
        wWidth: innerWidth,
      });
    };

    this.state = {
      scrollY: 0,
      wHeight: 0,
      wWidth: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', e => this.handleScroll(e));
    ['load', 'resize'].forEach(ev => window.addEventListener(ev, e => this.handleResize(e)));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', e => this.handleScroll(e));
    ['unload', 'resize'].forEach(ev => window.removeEventListener(ev, e => this.handleResize(e)));
  }

  render() {
    const { scrollY, wHeight, wWidth } = this.state;
    const { ...passThroughProps } = this.props;

    return (
      <ClientContext.Provider value={{ scrollY, wHeight, wWidth }}>
        <ComposedComponent {...passThroughProps} />
      </ClientContext.Provider>
    );
  }
};

ClientContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientContextProvider;
