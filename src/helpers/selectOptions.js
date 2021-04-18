import { object } from "prop-types";
import { formatName } from "./formatters";

export const getMembersOptions = (members) => {
  return members.map(({ name }) => {
    return {
      value: name,
      label: formatName(name),
    };
  });
};

export const getStatusOptions = (statuses) => {
  return statuses.map(({ status }) => {
    return {
      value: status,
      label: status,
    };
  });
};

export const getPriorityOptions = (priorities) => {
  return priorities.map(({ priority }) => {
    return {
      value: priority,
      label: priority,
    };
  });
};

export const getMembersProperties = (members, memberName) => {
  const options = getMembersOptions(members);
  const defaultMember = options.filter(({ value }) => value === memberName)[0];
  const { color } = members.filter((member) => member.name === memberName)[0];

  return {
    memberOptions: options,
    defaultMember,
    userColor: color,
  };
};

export const getStatusProperties = (statuses, status) => {
  const options = getStatusOptions(statuses);
  const defaultStatus = options.filter(({ value }) => value === status)[0];
  const { color, backgroundColor } = statuses.filter(
    (statusItem) => statusItem.status === status
  )[0];

  return {
    statusOptions: options,
    defaultStatus,
    statusColor: color,
    statusBackgroundColo: backgroundColor,
  };
};

export const getPriorityProperties = (priorities, priority) => {
  const options = getPriorityOptions(priorities);
  const defaultPriority = options.filter(({ value }) => value === priority)[0];
  const { color, backgroundColor } = priorities.filter(
    (priorityItem) => priorityItem.priority === priority
  )[0];

  return {
    priorityOptions: options,
    defaultPriority,
    priorityColor: color,
    priorityBackgroundColor: backgroundColor,
  };
};
