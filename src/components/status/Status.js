import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";

import { Container, Title, Bold } from "./styles";

const Status = () => {
  const { stickyTasks } = useContext(StickyTasksContext);
  const count = stickyTasks.length;
  return (
    <Container>
      <Title>
        showing <Bold>{count}</Bold> sticky task{count > 1 ? "s" : ""}
      </Title>
    </Container>
  );
};

export default Status;
