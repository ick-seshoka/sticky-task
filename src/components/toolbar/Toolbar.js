import React from "react";
import PropTypes from "prop-types";

import Member from "./members";

import { Container, AddMemberButton, Title } from "./styles";
import Members from "./members/Members";

const Toolbar = () => (
  <Container>
    <AddMemberButton />
    <Title>members</Title>
    <Members />
  </Container>
);

export default Toolbar;
