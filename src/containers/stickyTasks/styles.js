import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding: ${({ theme: { spacing } }) => spacing.stickyTasks.containerPadding};
  height: 40em;
  overflow-y: scroll;
`;
