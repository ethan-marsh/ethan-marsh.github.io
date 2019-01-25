import React from 'react';
import styled from 'styled-components';
import SocialIcons from 'components/SocialIcons';
import Grid from '../styles/Grid';

const StyledFooter = styled(Grid).attrs({
  as: 'footer',
})`
  padding: 3rem 0;
  background-color: #292929;
  color: #ddd;
  font-size: 1.3rem;
  line-height: 2em;
  grid-column: span 12;

  hr {
    grid-column: 2 / -2;
    margin: 2rem 0 6rem;
  }
`;

const FooterContent = styled.div`
  grid-column: 2 / -2;
  display: flex;
  justify-content: space-between;
  align-content: flex-end;

  p:last-child {
    padding: 3rem 0 1rem;
    font-size: 1rem;
    color: #ccc;
  }
`;

const footerItems = ['(925) 787 6250', 'ethancmarsh@yahoo.com', '\u00A9 2019 Ethan Marsh'];

const Footer = props => (
  <StyledFooter {...props}>
    <hr />
    <FooterContent>
      <div>
        {footerItems.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <div>
        <SocialIcons />
      </div>
    </FooterContent>
  </StyledFooter>
);

export default Footer;
