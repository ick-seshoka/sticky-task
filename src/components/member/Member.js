import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import { getNameFirstLetter } from "../../helpers";

const Member = ({ name, color, id }) => (
  <Container color={color}>{getNameFirstLetter(name)}</Container>
);

Member.defaultProps = {
  name: "John",
  color: "#2196F3",
  id: "1",
};

Member.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Member;
