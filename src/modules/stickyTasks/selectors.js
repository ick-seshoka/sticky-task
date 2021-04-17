import { createSelector } from "reselect";

export const getMembers = (state) => state?.members;
export const getMemberFilter = (state) => state?.memberFilter;
export const getShowDone = (state) => state?.showDone;
export const getStickyTasks = (state) => state?.stickyTasks;

const filterStickyTasksByMember = (stickyTasks, memberFilter) => {
  return stickyTasks.filter(({ user }) => user === memberFilter);
};

const filterStickyTasksByShowDone = (stickyTasks) => {
  return stickyTasks.filter(({ status }) => status);
};

export const getFilteredStickyTasks = createSelector(
  getMemberFilter,
  getShowDone,
  getStickyTasks,
  (memberFilter, showDone, stickyTasks) => {
    let filteredStickyTasks = [...stickyTasks];

    if (memberFilter && memberFilter !== "") {
      filteredStickyTasks = filterStickyTasksByMember(
        filteredStickyTasks,
        memberFilter
      );
    }

    if (showDone) {
      filteredStickyTasks = filterStickyTasksByShowDone(filteredStickyTasks);
    }

    return filteredStickyTasks;
  }
);
