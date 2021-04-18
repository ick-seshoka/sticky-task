import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

const Overlay = ({ showOverlay, children }) => (
  <Container showOverlay={showOverlay}>{children}</Container>
);

Overlay.defaultProps = {
  showOverlay: false,
};

Overlay.propTypes = {
  showOverlay: PropTypes.bool.isRequired,
};

export default Overlay;
