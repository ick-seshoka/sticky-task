import React from "react";
import PropTypes from "prop-types";

import { Container, CheckedIcon, UncheckedIcon, Title } from "./styles";

const Done = ({ showDone }) => (
  <Container>
    {showDone ? <CheckedIcon /> : <UncheckedIcon />}
    <Title>Show done</Title>
  </Container>
);

Done.defaultProps = {
  showDone: true,
};

Done.propTypes = {
  showDone: PropTypes.bool.isRequired,
};

export default Done;
