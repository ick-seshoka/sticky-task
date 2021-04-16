import React from "react";

import Toolbar from "@components/toolbar";
import Header from "@components/header";
import Status from "@components/status";
import StickyTasks from "@containers/stickyTasks";

import { Container, Main } from "./styles";

const Home = () => (
  <Container>
    <Toolbar />
    <Main>
      <Header />
      <Status />
      <StickyTasks />
    </Main>
  </Container>
);

export default Home;
