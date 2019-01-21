import styled from "styled-components";
import {mediaMax} from "./utilities";

const grid = ({ colPad = "1fr", colGap = "2rem" }) => `
  display: grid;
  grid-template-columns: ${colPad} repeat(10, 1fr) ${colPad};
  column-gap: ${colGap};
  width: 100%;
`;

const Grid = styled.div`
  ${grid({})}; /* Need to pass in empty object even with defaults */
   ${mediaMax.biggest`${grid({ colPad: "1fr" })};`}
   ${mediaMax.desktop`${grid({ colPad: "6rem" })};`}
   ${mediaMax.tablet`${grid({ colPad: "4rem" })};`}
   ${mediaMax.phone`${grid({ colPad: "2rem" })};`}
   ${mediaMax.smallest`${grid({ colPad: "1rem" })};`}
`;

export default Grid;
