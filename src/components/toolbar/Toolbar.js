import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";

import { Container, AddMemberButton, Title } from "./styles";
import Members from "./members";

const Toolbar = () => {
  const { members } = useContext(StickyTasksContext);

  return (
    <Container>
      <AddMemberButton />
      <Title>members</Title>
      <Members members={members} />
    </Container>
  );
};

export default Toolbar;
