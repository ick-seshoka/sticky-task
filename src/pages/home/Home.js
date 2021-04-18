import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";

import Toolbar from "@components/toolbar";
import Header from "@components/header";
import Status from "@components/status";
import StickyTasks from "@containers/stickyTasks";

import { Container, Main } from "./styles";

const Home = () => {
  const { stickyTasks } = useContext(StickyTasksContext);

  return (
    <Container>
      <Toolbar />
      <Main>
        <Header />
        <Status />
        <StickyTasks tasks={stickyTasks} />
      </Main>
    </Container>
  );
};

export default Home;
