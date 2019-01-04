import React from "react";
import Social from "./Social";

const Footer = () => (
  <div className="footer__inner">
    <div className="footer__divider">
      <hr className="opacity-05" />
    </div>
    <div className="footer__content">
      <div className="footer__contact">
        <span>+1 925 787 6250</span>
        <span>ethancmarsh@yahoo.com</span>
        <span className="footer__copyright">&copy; 2019 Ethan Marsh</span>
      </div>
      <div className="footer__links">
        <Social />
      </div>
    </div>
  </div>
);

export default Footer;
