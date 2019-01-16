import styled from "styled-components";
import media from "./utilities";

const grid = ({ colPad = "1fr", colGap = "2rem" }) => `
  display: grid;
  grid-template-columns: ${colPad} repeat(10, 1fr) ${colPad};
  column-gap: ${colGap};
  width: 100%;
  margin: 0 auto;
`;

const Grid = styled.div`
  ${grid({})}; /* Need to pass in empty object even with defaults */
   ${media.biggest`${grid({ colPad: "1fr" })};`}
   ${media.desktop`${grid({ colPad: "6rem" })};`}
   ${media.tablet`${grid({ colPad: "4rem" })};`}
   ${media.phone`${grid({ colPad: "2rem" })};`}
   ${media.smallest`${grid({ colPad: "1rem" })};`}
`;

export default Grid;
