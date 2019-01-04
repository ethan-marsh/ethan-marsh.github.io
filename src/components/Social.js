import React, { Component } from "react";

export default class Social extends Component {
  socialLinks = {
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

  render() {
    return (
      <ul
        className="home__bottom__links-list"
        data-animate-in="preset:slideInDownShort;duration:1000ms;delay:1000ms;"
      >
        {Object.keys(this.socialLinks).map(key => (
          <li className="social-item" key={key}>
            <a
              href={this.socialLinks[key].href}
              className={`social-link social-link--${key}`}
            >
              <img
                className="social-link__icon"
                src={`images/icons/${this.socialLinks[key].icon}`}
                alt={`social icon for ${key}`}
              />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
