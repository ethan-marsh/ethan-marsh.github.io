import React from "react";
import styled from "styled-components";
import { Grid } from "./styles/Grid";

import Social from "./Social";

const StyledFooter = styled(Grid).attrs({
  as: "footer"
})`
  padding: 3rem 0;
  background-color: #292929;
  color: #ddd;
  font-size: 1.3rem;
  line-height: 2em;

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

const Footer = props => (
  <StyledFooter {...props}>
    <hr />
    <FooterContent>
      <div>
        <p>+1 925 787 6250</p>
        <p>ethancmarsh@yahoo.com</p>
        <p>&copy; 2019 Ethan Marsh</p>
      </div>
      <div>
        <Social />
      </div>
    </FooterContent>
  </StyledFooter>
);

export default Footer;

//  .social - item {
//     &: not(: first - child) {
//     margin - left: 1rem;
//   }
// }

//   .social - link {
//     &: link,
//     &: visited {
//     filter: brightness(190 %);
//     transition: all 0.2s ease -in;
//   }

//     &: hover,
//     &: active {
//     filter: brightness(150 %);
//   }

//     & __icon {
//     width: 3rem;
//     height: 3rem;

//     opacity: 0.9;
//   }
// }
// }
