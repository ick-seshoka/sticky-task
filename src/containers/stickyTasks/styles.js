import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${({ theme: { spacing } }) => spacing.stickyTasks.containerPadding};
`;
