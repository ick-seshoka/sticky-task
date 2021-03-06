import styled from "styled-components";

import IconSource from "@components/icon";
import AddButtonIcon from "@assets/svg/add-icon.svg";
import CloseButtonIcon from "@assets/svg/close-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 9.6875em;
  background-color: ${({ theme: { colors } }) => colors.gray};
  min-height: 100%;
  align-items: center;
`;

export const AddMemberButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: 1em;
  cursor: pointer;
`;

export const AddIcon = styled(IconSource).attrs({
  src: AddButtonIcon,
})``;

export const CloseIcon = styled(IconSource).attrs({
  src: CloseButtonIcon,
})``;

export const Title = styled.p`
  font-size: 1.125em;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.darkBlueGray};
  text-transform: capitalize;
  margin-bottom: 2.5em;
`;
