import React from 'react';
import styled from 'styled-components';
import { socialLinksData as socialLinks } from 'data';
import Icon from 'components/Icon';

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

const SocialIcons = () => (
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

export default SocialIcons;
