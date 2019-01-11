import styled from "styled-components";
import { grid, media } from "./utilities";

const Grid = styled.div`
  ${grid({})}; /* Need to pass in empty object even with defaults */

  ${media.desktop`${grid({ colPad: "5rem" })};`}
  ${media.tablet`${grid({ colPad: "2rem" })};`}
  ${media.phone`${grid({ colPad: "1rem" })};`}
`;

export { Grid };
