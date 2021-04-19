import React, { useContext } from "react";

import { StickyTasksContext } from "@contexts/stickyTasksContext";
import { taskPriorities, statusColors } from "@enums";
import {
  getMembersProperties,
  getStatusProperties,
  getPriorityProperties,
} from "@helpers";

import { taskMemberSelect, statusSelect, prioritySelect } from "@styles";

import {
  Container,
  ContentWrap,
  PriorityBar,
  Title,
  Label,
  MemberSelect,
  GridWrap,
  PrioritySelect,
  StatusSelect,
} from "./styles";

const StickyTask = ({ id, title, status, user, priority }) => {
  const {
    setStickyTaskTitle,
    setStickyTaskStatus,
    setStickyTaskPriority,
    setStickyTaskMember,
    members,
  } = useContext(StickyTasksContext);

  const { memberOptions, defaultMember, userColor } = getMembersProperties(
    members,
    user
  );

  const {
    statusOptions,
    defaultStatus,
    statusColor,
    statusBackgroundColor,
  } = getStatusProperties(statusColors, status);

  const {
    priorityOptions,
    defaultPriority,
    priorityColor,
    priorityBackgroundColor,
  } = getPriorityProperties(taskPriorities, priority);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setStickyTaskTitle(id, value);
  };

  const handleMemberChange = (option) => {
    const { value } = option;
    setStickyTaskMember(id, value);
  };

  const handleStatusChange = (option) => {
    const { value } = option;
    setStickyTaskStatus(id, value);
  };

  const handlePriorityChange = (option) => {
    const { value } = option;
    setStickyTaskPriority(id, value);
  };

  return (
    <Container userColor={userColor} status={status}>
      <ContentWrap margined>
        <Title
          value={title}
          onChange={handleTitleChange}
          placeholder="Sticky task title goes here, write a short description of the sticky task"
        />
        <ContentWrap>
          <Label>for:</Label>
          <MemberSelect
            defaultValue={defaultMember}
            customStyles={taskMemberSelect}
            onChange={handleMemberChange}
            options={memberOptions}
            placeholder={"member"}
          />
        </ContentWrap>
        <ContentWrap flexDirection="row">
          <GridWrap>
            <StatusSelect
              customStyles={statusSelect}
              defaultValue={defaultStatus}
              onChange={handleStatusChange}
              options={statusOptions}
              placeholder="status"
              customDropdown
            />
            <PrioritySelect
              customStyles={prioritySelect}
              defaultValue={defaultPriority}
              onChange={handlePriorityChange}
              options={priorityOptions}
              placeholder="priority"
              customDropdown
            />
          </GridWrap>
        </ContentWrap>
      </ContentWrap>
      <PriorityBar priority={priority} />
    </Container>
  );
};

export default StickyTask;
