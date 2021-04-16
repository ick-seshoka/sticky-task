import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";
import { newStickyTask } from "@data";

import { Container, CirclePlusIcon, Title } from "./styles";

const NewTaskCard = () => {
  const { addStickyTask } = useContext(StickyTasksContext);

  const handleAddNewStickyTask = () => {
    addStickyTask(newStickyTask);
  };

  return (
    <Container onClick={handleAddNewStickyTask}>
      <CirclePlusIcon />
      <Title>Click here to add a new sticky task</Title>
    </Container>
  );
};

export default NewTaskCard;
