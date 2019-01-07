import React from "react";

const Header = () => (
  <div className="logo">
    <a href="/" className="logo__link">
      <img
        src="images/logo-dark.png"
        alt="Ethan"
        title="ethanmarsh.com"
        className="logo__img logo__img--dark"
      />
    </a>
    <a href="/" className="logo__link">
      <img
        src="images/logo.png"
        alt="Ethan Marsh"
        title="ethanmarsh.com"
        className="logo__img"
      />
    </a>
  </div>
);

export default Header;
