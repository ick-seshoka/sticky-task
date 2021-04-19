export const saveMembersToLocalStorage = (members) => {
  localStorage.setItem("members", JSON.stringify(members));
};

export const getMembersFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("members"));
};

export const saveStickyTasksToLocalStorage = (stickyTasks) => {
  localStorage.setItem("stickyTasks", JSON.stringify(stickyTasks));
};

export const getStickyTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("stickyTasks"));
};

export const persistStateToLocalStorage = (members, stickyTasks) => {
  saveMembersToLocalStorage(members);
  saveStickyTasksToLocalStorage(stickyTasks);
};

export const getPersistedStateFromLocalStorage = () => {
  return {
    members: getMembersFromLocalStorage(),
    stickyTasks: getStickyTasksFromLocalStorage(),
  };
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
