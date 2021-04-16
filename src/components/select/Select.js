import React from "react";
import PropTypes from "prop-types";

import { navSelectMember } from "@styles";

import DropdownIndicator from "./dropdownIndicator";

import { Container } from "./styles";

const Select = ({
  options,
  onChange,
  defaultValue,
  placeholder,
  customStyles,
  customDropdown,
}) => {
  return customDropdown ? (
    <Container
      components={{ DropdownIndicator }}
      styles={customStyles}
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
    />
  ) : (
    <Container
      styles={customStyles}
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Select.defaultProps = {
  options: [
    { value: "tshil", label: "Tshil" },
    { value: "kagiso", label: "Kagiso" },
    { value: "isaac", label: "Isaac" },
  ],
  defaultProps: {},
  onChange: () => {},
  placeholder: "All members",
  customStyles: navSelectMember,
  customDropdown: false,
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  customStyles: PropTypes.object,
  customDropdown: PropTypes.bool,
};

export default Select;
