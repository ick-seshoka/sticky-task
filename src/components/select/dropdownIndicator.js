import React from "react";
import { components } from "react-select";

import { SelectIcon } from "./styles";

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <SelectIcon />
  </components.DropdownIndicator>
);

export default DropdownIndicator;
