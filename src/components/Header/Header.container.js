import React, { Component } from 'react';
import HeaderComponent from './Header.component';

const mobileBreak = 1024;

class Header extends Component {
  state = {
    mobile: false,
    on: false,
  };

  componentDidMount() {
    const { wWidth } = this.props;
    this.setState({ mobile: wWidth <= mobileBreak });
  }

  componentDidUpdate(prevProps) {
    const { scrollY, wHeight, wWidth } = this.props;
    const togglePoint = wHeight - 80; // window height - header height

    if (wWidth !== prevProps.wWidth) {
      this.setState({ mobile: wWidth <= mobileBreak });
    } else if (wWidth > mobileBreak && scrollY !== prevProps.scrollY) {
      this.setState({
        mobile: false,
        on: scrollY >= togglePoint,
      });
    }
  }

  render() {
    const { on, mobile } = this.state;
    return <HeaderComponent mobile={mobile} on={on} />;
  }
}

export default Header;
