import { css } from "styled-components";

// Default sizes (max-width)
const sizes = {
  biggest: 2400,
  desktop: 1440,
  tablet: 1024,
  phone: 736,
  smallest: 400
};

// Media template generator
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
