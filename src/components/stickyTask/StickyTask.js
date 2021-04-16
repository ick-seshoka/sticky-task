import React from "react";

import {
  Container,
  ContentWrap,
  StatusBar,
  Title,
  Label,
  Status,
} from "./styles";

const StickyTask = ({
  userColor,
  statusColor,
  title,
  status,
  user,
  priority,
}) => {
  return (
    <Container userColor={userColor}>
      <ContentWrap margined>
        <Title value={title} onChange={() => {}} />
        <ContentWrap>
          <Label>for:</Label>
        </ContentWrap>
      </ContentWrap>
      <StatusBar statusColor={statusColor} />
    </Container>
  );
};

export default StickyTask;
