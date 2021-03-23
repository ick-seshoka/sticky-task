import styled from "styled-components";

import IconSource from "@components/icon";
import AddButtonIcon from "@assets/svg/add-icon.svg";

export const Container = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: 1em;
  cursor: pointer;
`;

export const AddIcon = styled(IconSource).attrs({
  src: AddButtonIcon,
})``;
