import React from "react";

import { taskMemberSelect, statusSelect, prioritySelect } from "@styles";
import { statusOptions, priorityOptions } from "@enums";

import {
  Container,
  ContentWrap,
  StatusBar,
  Title,
  Label,
  Status,
  MemeberSelect,
  GridWrap,
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
          <MemeberSelect customStyles={taskMemberSelect} />
        </ContentWrap>
        <ContentWrap flexDirection="row">
          <GridWrap>
            <StatusSelect
              customStyles={statusSelect}
              options={statusOptions}
              placeholder="select status"
              customDropdown
            />
            <PrioritySelect
              customStyles={prioritySelect}
              options={priorityOptions}
              placeholder="select priority"
              customDropdown
            />
          </GridWrap>
        </ContentWrap>
      </ContentWrap>
      <StatusBar statusColor={statusColor} />
    </Container>
  );
};

export default StickyTask;
