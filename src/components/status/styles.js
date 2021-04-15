import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: ${({ theme: { spacing } }) => spacing.status.offBorderSpace};
  background-color: ${({ theme: { colors } }) => colors.gray};
`;

export const Title = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.title};
  color: ${({ theme: { colors } }) => colors.darkBlueGray};
  font-weight: 400;
`;

export const Bold = styled.strong``;
