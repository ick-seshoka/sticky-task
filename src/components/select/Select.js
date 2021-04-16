import React from "react";
import PropTypes from "prop-types";

import { navSelectMember } from "@styles";

import { Container } from "./styles";

const Select = ({
  options,
  onChange,
  defaultValue,
  placeholder,
  customeStyles,
}) => {
  return (
    <Container
      styles={customeStyles}
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
  customeStyles: navSelectMember,
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  customeStyles: PropTypes.object,
};

export default Select;
