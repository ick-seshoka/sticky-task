import styled from "styled-components";
import Icon from "@components/icon";

import CirclePlusIconSource from "@assets/svg/circle-plus-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 15.635em;
  width: 17.75em;
  background-color: ${({ theme: { colors } }) => colors.gray};
  border-radius: 1em;
  border: 3px dashed ${({ theme: { colors } }) => colors.blueGray};
  justify-content: center;
  align-items: center;
  margin: 1.5em;
`;

export const CirclePlusIcon = styled(Icon).attrs({
  src: CirclePlusIconSource,
})``;

export const Title = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.regular};
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.blueGray};
  max-width: 80%;
  text-align: center;
  margin-top: 1.5em;
`;
