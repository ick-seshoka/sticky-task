import React from "react";
import PropTypes from "prop-types";

import { Container, Title, Bold } from "./styles";

const Status = ({ count }) => (
  <Container>
    <Title>
      showing <Bold>{count}</Bold> sticky tasks
    </Title>
  </Container>
);

Status.defaultProps = {
  count: 12,
};

Status.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Status;
