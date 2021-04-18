import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: ${({ showOverlay }) => (showOverlay ? "flex" : "none")};
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
  margin-left: 9em;
`;
