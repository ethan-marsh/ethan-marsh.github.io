import React, { Component } from "react";
import styled from "styled-components";

import {Icon} from "Elements";

const socialLinks = {
  linkedin: {
    href: "https://www.linkedin.com/in/ethan-marsh-50687296",
    icon: "icon-linkedin.png"
  },
  github: {
    href: "https://github.com/ethan-marsh",
    icon: "icon-github.png"
  },
  // email: {
  //   href: "mailto:ethancmarsh@yahoo.com?subject=Saw%20Your%20Site!",
  //   icon: "icon-email.png"
  // },
  // phone: {
  //   href: "tel:+19257876250",
  //   icon: "icon-phone.png"
  // }
};

export default class Social extends Component {
  render() {
    return (
      <ul className="home__bottom__links-list">
        {Object.keys(socialLinks).map(key => (
          <li className="social-item" key={key}>
            <StyledIconLink
              href={socialLinks[key].href}
              className={`social-link social-link--${key}`}
            >
            <Icon
                name={key}
                width="3vw"
                height="3vw"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
            />
          </StyledIconLink>
          </li>
        ))}
      </ul>
    );
  }
}

const StyledIconLink = styled.a`
  border-radius: 50%;
  color: #555;
  background-color: transparent;
  display: flex;
  justify-content: center;
  transition: all .2s ease;

  &:hover {
    color: #007a81;
  }
`;
