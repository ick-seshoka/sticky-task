import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";

import { Container, CheckedIcon, UncheckedIcon, Title } from "./styles";

const Done = () => {
  const { setShowDone, showDone } = useContext(StickyTasksContext);

  const handleShowDoneClick = () => {
    showDone ? setShowDone(false) : setShowDone(true);
  };

  return (
    <Container onClick={handleShowDoneClick}>
      {showDone ? <CheckedIcon /> : <UncheckedIcon />}
      <Title>Show done</Title>
    </Container>
  );
};

export default Done;
