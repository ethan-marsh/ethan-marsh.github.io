import { css } from "styled-components";

// Default sizes (max-width)
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Media template generator
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen only and (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
