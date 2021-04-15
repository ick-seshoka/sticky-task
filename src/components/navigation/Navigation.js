import React from "react";

import Search from "./search";
import Select from "./select";
import Done from "./done";

import { Container } from "./styles";

const Navigation = () => (
  <Container>
    <Search />
    <Select />
    <Done />
  </Container>
);

export default Navigation;
