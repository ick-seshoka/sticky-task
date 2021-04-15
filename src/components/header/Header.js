import React from "react";

import { routes } from "@enums";

import Navigation from "@components/navigation";

import { Container, ContentWrap, Logo, LogoIcon, Slogan } from "./styles";

const Header = () => (
  <Container>
    <ContentWrap>
      <Logo to={routes.home}>
        <LogoIcon />
        sticky task
      </Logo>
      <Slogan>Manage your team’s tasks easily with sticky notes tasks</Slogan>
    </ContentWrap>
    <Navigation />
  </Container>
);

export default Header;
