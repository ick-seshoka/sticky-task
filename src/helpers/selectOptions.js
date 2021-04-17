import { formatName } from "./formatters";

export const getMembersOptions = (members) => {
  return members.map(({ name }) => {
    return {
      value: name,
      label: formatName(name),
    };
  });
};
