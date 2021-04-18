import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";

import { Container, CirclePlusIcon, Title } from "./styles";

const NewTaskCard = () => {
  const { addStickyTask } = useContext(StickyTasksContext);

  return (
    <Container onClick={addStickyTask}>
      <CirclePlusIcon />
      <Title>Click here to add a new sticky task</Title>
    </Container>
  );
};

export default NewTaskCard;
