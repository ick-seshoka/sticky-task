import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";
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
  id,
  userColor,
  statusColor,
  title,
  status,
  user,
  priority,
}) => {
  const { titleUpdate } = useContext(StickyTasksContext);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    titleUpdate(id, value);
  };

  return (
    <Container userColor={userColor}>
      <ContentWrap margined>
        <Title
          value={title}
          onChange={handleTitleChange}
          placeholder="Sticky task title goes here, write a short description of the sticky task"
        />
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
