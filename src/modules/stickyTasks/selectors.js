import { createSelector } from "reselect";

export const getMembers = (state) => state?.members;
export const getMemberFilter = (state) => state?.memberFilter;

export const getFilteredStickyTasks = createSelector(
  getMembers,
  getMemberFilter,
  (members, filter) => {
    if (filter && filter !== "") {
      return members.filter(({ name }) => name.indexOf(filter) !== -1);
    }
    return members;
  }
);
