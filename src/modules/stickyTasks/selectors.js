import { createSelector } from "reselect";

export const getMembers = (state) => state?.members;
export const getMemberFilter = (state) => state?.memberFilter;
export const getShowDone = (state) => state?.showDone;
export const getSearchFilter = (state) => state?.searchFilter;
export const getStickyTasks = (state) => state?.stickyTasks;
export const getNewStickyTaskCardOn = (state) => state?.newStickyTaskCardOn;

const filterStickyTasksByMember = (stickyTasks, memberFilter) => {
  return stickyTasks.filter(({ user }) => user === memberFilter);
};

const filterStickyTasksByShowDone = (stickyTasks) => {
  return stickyTasks.filter(({ status }) => status);
};

const filterStickyTasksBySearch = (stickyTasks, searchFilter) => {
  return stickyTasks.filter(
    ({ title }) =>
      title.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1
  );
};

export const getFilteredStickyTasks = createSelector(
  getMemberFilter,
  getShowDone,
  getSearchFilter,
  getStickyTasks,
  (memberFilter, showDone, searchFilter, stickyTasks) => {
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

    if (searchFilter && searchFilter !== "") {
      filteredStickyTasks = filterStickyTasksBySearch(
        filteredStickyTasks,
        searchFilter
      );
    }

    return filteredStickyTasks;
  }
);
