import styled from "styled-components";
import Select from "react-select";

import Icon from "@components/icon";
import MinuseIcon from "@assets/svg/minus-icon.svg";

export const Container = styled(Select)`
  width: 10.775em;
`;

export const SelectIcon = styled(Icon).attrs({ src: MinuseIcon })``;
