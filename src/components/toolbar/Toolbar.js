import React, { useContext } from "react";
import PropTypes from "prop-types";

import { StickyTasksContext } from "@contexts/stickyTasksContext";

import {
  Container,
  AddMemberButton,
  Title,
  AddIcon,
  CloseIcon,
} from "./styles";
import Members from "./members";

const Toolbar = ({ handleShowOverlay, handleHideOverlay, showOverlay }) => {
  const { members } = useContext(StickyTasksContext);

  return (
    <Container>
      {showOverlay ? (
        <AddMemberButton onClick={handleHideOverlay}>
          <CloseIcon />
        </AddMemberButton>
      ) : (
        <AddMemberButton onClick={handleShowOverlay}>
          <AddIcon />
        </AddMemberButton>
      )}
      <Title>{showOverlay ? "close" : "member"}</Title>
      <Members members={members} />
    </Container>
  );
};

Toolbar.defaultProps = {
  showOverlay: false,
  handleShowOverlay: () => {},
  handleHideOverlay: () => {},
};

Toolbar.propTypes = {
  showOverlay: PropTypes.bool,
  handleShowOverlay: PropTypes.func.isRequired,
  handleHideOverlay: PropTypes.func.isRequired,
};
export default Toolbar;
