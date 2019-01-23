// Default grid generator
export const grid = ({ colPad = "1fr", colGap = "2rem" }) => `
  display: grid;
  grid-template-columns: ${colPad} repeat(10, 1fr) ${colPad};
  column-gap: ${colGap};
  width: 100%;
  margin: 0 auto;
`;
