import React, { Component } from "react";

const socialLinks = {
  linkedin: {
    href: "https://www.linkedin.com/in/ethan-marsh-50687296",
    icon: "icon-linkedin.png"
  },
  github: {
    href: "https://github.com/ethan-marsh",
    icon: "icon-github.png"
  },
  email: {
    href: "mailto:ethancmarsh@yahoo.com?subject=Saw%20Your%20Site!",
    icon: "icon-email.png"
  },
  phone: {
    href: "tel:+19257876250",
    icon: "icon-phone.png"
  }
};

export default class Social extends Component {

  render() {
    return (
      <ul className="home__bottom__links-list">
        {Object.keys(socialLinks).map(key => (
          <li className="social-item" key={key}>
            <a
              href={socialLinks[key].href}
              className={`social-link social-link--${key}`}
            >
              <img
                className="social-link__icon"
                src={`images/icons/${socialLinks[key].icon}`}
                alt={`social icon for ${key}`}
              />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
