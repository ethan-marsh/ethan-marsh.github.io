import React from "react";

const Header = () => (
  <div className="header__logo">
    <div className="header__logo-inner">
      <a href="/" className="header__logo-link">
        <img
          src="images/logo-dark.png"
          alt="Ethan"
          title="ethanmarsh.com"
          className="header__logo-img header__logo-img--dark"
        />
      </a>
      <a href="/" className="header__logo-link">
        <img
          src="images/logo.png"
          alt="Ethan Marsh"
          title="ethanmarsh.com"
          className="header__logo-img"
        />
      </a>
    </div>
  </div>
);

export default Header;
