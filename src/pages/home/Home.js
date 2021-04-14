import React from "react";

import Toolbar from "@components/toolbar";
import Header from "@components/header";
import Status from "@components/status";

import { Container, Main } from "./styles";

const Home = () => (
  <Container>
    <Toolbar />
    <Main>
      <Header />
      <Status />
    </Main>
  </Container>
);

export default Home;
