import React from "react";

import Toolbar from "@components/toolbar";
import Header from "@components/header";

import { Container, Main } from "./styles";

const Home = () => (
  <Container>
    <Toolbar />
    <Main>
      <Header />
    </Main>
  </Container>
);

export default Home;
