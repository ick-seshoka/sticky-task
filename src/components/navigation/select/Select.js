import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Select = ({ options, onChange, defaultValue }) => (
  <Container
    defaultValue={defaultValue}
    options={options}
    onChange={onChange}
    placeholder={"All team members"}
  />
);

Select.defaultProps = {
  options: [
    { value: "isaac", label: "Isaac" },
    { value: "tshil", label: "Tshil" },
    { value: "kagiso", label: "Kagiso" },
  ],
  defaultProps: null,
  onChange: () => {},
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
