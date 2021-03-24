import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 9em [Toolbar] auto [Main];
  height: 100%;
`;

export const Main = styled.div`
  display: grid;
  grid-template-rows: 9.85em [Header] 3.75em [Filter] auto [Tasks];
`;
