import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const socialLinks = {
  linkedin: {
    href: 'https://www.linkedin.com/in/ethan-marsh-50687296',
    icon: 'icon-linkedin.png'
  },
  github: {
    href: 'https://github.com/ethan-marsh',
    icon: 'icon-github.png'
  }
  // email: {
  //   href: "mailto:ethancmarsh@yahoo.com?subject=Saw%20Your%20Site!",
  //   icon: "icon-email.png"
  // },
  // phone: {
  //   href: "tel:+19257876250",
  //   icon: "icon-phone.png"
  // }
};

const IconList = styled.ul`
  list-style: none;
  display: flex;

  li:not(:first-child) {
    margin-left: 2vh;
  }
`;

const StyledIconLink = styled.a`
  border-radius: 50%;
  color: #ccc;
  background-color: transparent;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease-out;

  :hover {
    color: ${props => props.theme.lightblue};
  }
`;

const SocialLinks = () => (
  <IconList>
    {Object.keys(socialLinks).map(key => (
      <li key={key}>
        <StyledIconLink href={socialLinks[key].href}>
          <Icon
            name={key}
            width="3.5vh"
            height="3.5vh"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
          />
        </StyledIconLink>
      </li>
    ))}
  </IconList>
);

export default SocialLinks;
