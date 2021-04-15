import styled from "styled-components";

import IconSource from "@components/icon";
import MagnifyglassIcon from "@assets/svg/magnifyglass-icon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.8675em 6.75em;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.blueGray};
  width: 10.775em;
  height: 1.87em;
  align-items: center;
`;

export const Magnifyglass = styled(IconSource).attrs({
  src: MagnifyglassIcon,
})``;

export const Input = styled.input`
  border: none;
  background: transparent;
  width: 7.775em;
  outline: none;
  color: ${({ theme: { colors } }) => colors.blueGray};
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
`;
