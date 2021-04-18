import React from "react";

import {
  AddMemberButtob,
  ColorInput,
  Container,
  MemberIcon,
  NameInput,
  Note,
  Title,
  Bold,
} from "./styles";

const AddMember = () => (
  <Container>
    <MemberIcon />
    <Title>Add a new member</Title>
    <NameInput placeholder="member name" />
    <ColorInput placeholder="color code" />
    <AddMemberButtob>add member</AddMemberButtob>
    <Note>
      <Bold>Note:</Bold> member color code has to be a valid color code: #2196F3
    </Note>
  </Container>
);

export default AddMember;
