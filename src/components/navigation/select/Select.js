import React from "react";
import PropTypes from "prop-types";

import { theme } from "@styles";

import { Container } from "./styles";

const Select = ({ options, onChange, defaultValue }) => {
  const { colors, fontSize } = theme;

  const customeStyles = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: colors.blueGray,
    }),

    contaienr: (provided, state) => ({
      ...provided,
      borderColor: colors.blueGray,
      minHeight: "32px",
    }),

    control: (provided, state) => ({
      ...provided,
      borderColor: colors.blueGray,
      fontSize: fontSize.title,
    }),
    input: (provided, state) => ({
      ...provided,
      fontSize: fontSize.medium,
      fontWeight: "bold",
      color: colors.blueGray,
    }),
  };

  return (
    <Container
      styles={customeStyles}
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
      placeholder={"All members"}
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
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default Select;
