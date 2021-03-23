import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1.875em;
  height: 1.875em;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
  font-size: 0.9375em;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 1.625em;
  }
`;
