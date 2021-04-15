import styled from "styled-components";
import { Link } from "react-router-dom";

import IconSource from "@components/icon";
import StickyTaskIcon from "@assets/svg/sticky-task-icon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-left: ${({
    theme: {
      spacing: { container },
    },
  }) => container.paddingLeft};
  padding-right: ${({
    theme: {
      spacing: { container },
    },
  }) => container.paddingRight};
  padding-top: ${({
    theme: {
      spacing: { container },
    },
  }) => container.paddingTop};
  padding-bottom: ${({
    theme: {
      spacing: { container },
    },
  }) => container.paddingBottom};
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled(Link)`
  display: grid;
  grid-template-columns: 1.2125em [Icon] auto [LogoName];
  grid-column-gap: 0.5em;
  font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
  text-transform: capitalize;
  color: ${({ theme: { colors } }) => colors.darkBlueGray};
  font-weight: 600;
  padding-bottom: ${({
    theme: {
      spacing: { heading },
    },
  }) => heading.paddingBottom};
`;

export const LogoIcon = styled(IconSource).attrs({ src: StickyTaskIcon })``;

export const Slogan = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  padding-left: ${({
    theme: {
      spacing: { paragraph },
    },
  }) => paragraph.paddingLeft};
`;
