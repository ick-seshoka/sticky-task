import styled from "styled-components";

import IconSource from "@components/icon";

import CheckedIconSource from "@assets/svg/checked-icon.svg";
import UncheckedIconSource from "@assets/svg/unchecked-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 10.77em;
`;

export const CheckedIcon = styled(IconSource).attrs({
  src: CheckedIconSource,
})`
  padding-right: ${({ theme: { spacing } }) => spacing.image.paddingRight};
`;

export const UncheckedIcon = styled(IconSource).attrs({
  src: UncheckedIconSource,
})`
  padding-right: ${({ theme: { spacing } }) => spacing.image.paddingRight};
`;

export const Title = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.title};
  color: ${({ theme: { colors } }) => colors.blueGray};
  font-weight: 600;
  margin-left: ${({ theme: { spacing } }) => spacing.paragraph.imageGap};
`;
