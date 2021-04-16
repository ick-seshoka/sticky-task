import React from "react";

import { taskMemberSelect, statusSelect } from "@styles";
import { statusOptions } from "@enums";

import {
  Container,
  ContentWrap,
  StatusBar,
  Title,
  Label,
  Status,
  MemeberSelect,
  PrioritySelect,
  StatusSelect,
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
          <MemeberSelect customeStyles={taskMemberSelect} />
        </ContentWrap>
        <ContentWrap>
          <StatusSelect
            customeStyles={statusSelect}
            options={statusOptions}
            placeholder="select status"
          />
        </ContentWrap>
      </ContentWrap>
      <StatusBar statusColor={statusColor} />
    </Container>
  );
};

export default StickyTask;
