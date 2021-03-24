import styled from "styled-components";

import AddMemberButtonSource from "@components/buttons/add";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 9.6875em;
  background-color: ${({ theme: { colors } }) => colors.gray};
  min-height: 100%;
  align-items: center;
`;

export const AddMemberButton = styled(AddMemberButtonSource)``;

export const Title = styled.p`
  font-size: 1.125em;
  font-weight: 500;
  color: ${({ theme: colors }) => colors.darkBlueGray};
  text-transform: capitalize;
  margin-bottom: 2.5em;
`;
