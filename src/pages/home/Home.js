import React from "react";

import StickyTasksContextProvider from "@contexts";

import Toolbar from "@components/toolbar";
import Header from "@components/header";
import Status from "@components/status";
import StickyTasks from "@containers/stickyTasks";

import { Container, Main } from "./styles";

const Home = () => (
  <Container>
    <StickyTasksContextProvider>
      <Toolbar />
      <Main>
        <Header />
        <Status />
        <StickyTasks />
      </Main>
    </StickyTasksContextProvider>
  </Container>
);

export default Home;
