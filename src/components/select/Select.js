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
  isClearable,
}) => {
  return customDropdown ? (
    <Container
      components={{ DropdownIndicator }}
      styles={customStyles}
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      isClearable={isClearable}
      menuPortalTarget={document.querySelector("body")}
    />
  ) : (
    <Container
      styles={customStyles}
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      isClearable={isClearable}
      menuPortalTarget={document.querySelector("body")}
    />
  );
};

Select.defaultProps = {
  options: [
    { value: "tshil", label: "Tshil" },
    { value: "kagiso", label: "Kagiso" },
    { value: "isaac", label: "Isaac" },
  ],
  defaultValue: {},
  onChange: () => {},
  placeholder: "All members",
  customStyles: navSelectMember,
  customDropdown: false,
  isClearable: false,
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  customStyles: PropTypes.object,
  customDropdown: PropTypes.bool,
  isClearable: PropTypes.bool,
};

export default Select;
