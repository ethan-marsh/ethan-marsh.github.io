import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LogoAnimated from './Logo.animated';
import LogoStatic from './Logo.static';

class Logo extends PureComponent {
  render() {
    const { mobile, on } = this.props;
    if (mobile) {
      return <LogoStatic />;
    } if (!mobile) {
      return <LogoAnimated on={on} />;
    }
  }
}

Logo.propTypes = {
  on: PropTypes.bool.isRequired,
  mobile: PropTypes.bool.isRequired,
};

export default Logo;
