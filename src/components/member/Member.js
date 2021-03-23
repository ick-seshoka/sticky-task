import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Member = ({ color, nameFirstLetter }) => (
  <Container color={color}>{nameFirstLetter}</Container>
);

Member.defaultProps = {
  color: "#2196F3",
  nameFirstLetter: "A",
};

Member.propTypes = {
  color: PropTypes.string.isRequired,
  nameFirstLetter: PropTypes.string.isRequired,
};

export default Member;
