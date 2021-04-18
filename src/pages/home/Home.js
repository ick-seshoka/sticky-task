import React, { useContext, useState } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";

import Toolbar from "@components/toolbar";
import Header from "@components/header";
import Status from "@components/status";
import Overlay from "@components/overlay";
import AddMember from "@components/addMember";
import StickyTasks from "@containers/stickyTasks";

import { Container, Main } from "./styles";

const Home = () => {
  const { stickyTasks } = useContext(StickyTasksContext);
  const [state, setState] = useState({
    showOverlay: false,
    memberName: "",
    memberColor: "",
  });

  const { showOverlay, memberName, memberColor } = state;

  return (
    <Container>
      <Toolbar />
      <Main>
        <Overlay showOverlay>
          <AddMember />
        </Overlay>
        <Header />
        <Status />
        <StickyTasks tasks={stickyTasks} />
      </Main>
    </Container>
  );
};

export default Home;
