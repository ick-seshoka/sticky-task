import styled from "styled-components";

import Icon from "@components/icon";
import MemberIconSource from "@assets/svg/member-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 28em;
  height: 30em;
  background-color: ${({ theme: { colors } }) => colors.gray};
  border-radius: 0.75em;
  align-items: center;
  z-index: 2;
  margin-top: 7em;
  margin-left: 2em;
  padding: 2em;
`;

export const MemberIcon = styled(Icon).attrs({ src: MemberIconSource })``;

export const Title = styled.p`
  margin-top: 0.375em;
  margin-bottom: 1.525em;
  color: ${({ theme: { colors } }) => colors.darkBlueGray};
  font-weight: 600;
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
`;

export const NameInput = styled.input`
  background: transparent;
  border: 1px solid ${({ theme: { colors } }) => colors.blueGray};
  padding: 0.5em;
  border-radius: 0.4375em;
  text-align: center;
  font-weight: 500;
  font-size: ${({ theme: { fontSize } }) => fontSize.regular};
  color: ${({ theme: { colors } }) => colors.darkBlueGray};
  margin-bottom: 1.2625em;
  width: 16.25em;
  outline: none;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.shadedBlueGray};
  }
`;

export const ColorInput = styled.input`
  color: ${({ theme: { colors } }) => colors.darkBlueGray};
  background: transparent;
  border: 1px solid ${({ theme: { colors } }) => colors.blueGray};
  padding: 0.5em;
  border-radius: 0.4375em;
  text-align: center;
  font-weight: 500;
  font-size: ${({ theme: { fontSize } }) => fontSize.regular};
  margin-bottom: 1.2625em;
  width: 16.25em;
  outline: none;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.shadedBlueGray};
  }
`;

export const AddMemberButtob = styled.button`
  background-color: ${({ theme: { colors } }) => colors.green};
  border: none;
  outline: none;
  margin-bottom: 1em;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.white};
  border-radius: 30px;
  width: 12.5em;
  height: 2.625em;
  font-weight: 600;
  text-transform: capitalize;
  font-size: ${({ theme: { fontSize } }) => fontSize.regular};
  margin-bottom: 2em;
`;

export const Note = styled.p`
  width: 80%;
  color: ${({ theme: { colors } }) => colors.shadedBlueGray};
  text-align: center;
  line-height: 1.5em;
`;

export const Bold = styled.strong``;
