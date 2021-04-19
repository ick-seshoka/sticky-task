import React, { createContext, useReducer, useEffect } from "react";

import {
  initialState,
  reducer,
  setStickyTaskTitle,
  hideNewStickyTaskCard,
  addStickyTask,
  setMemberFilter,
  getFilteredStickyTasks,
  getNewStickyTaskCardOn,
  getMemberFilter,
  getMembers,
  getShowDone,
  setShowDone,
  setSearchFilter,
  setStickyTaskMember,
  setStickyTaskStatus,
  setStickyTaskPriority,
  addMember,
  getSearchFilter,
} from "@modules/stickyTasks";
import { clearLocalStorage, persistStateToLocalStorage } from "@helpers";

export const StickyTasksContext = createContext();

const StickyTasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    persistStateToLocalStorage(members, stickyTasks);

    return () => {
      clearLocalStorage();
    };
  }, [state.members, state.stickyTasks]);

  const newStickyTaskCardOn = getNewStickyTaskCardOn(state);
  const stickyTasks = getFilteredStickyTasks(state);
  const members = getMembers(state);
  const memberFilter = getMemberFilter(state);
  const showDone = getShowDone(state);
  const searchFilter = getSearchFilter(state);

  return (
    <StickyTasksContext.Provider
      value={{
        stickyTasks,
        members,
        newStickyTaskCardOn,
        memberFilter,
        showDone,
        searchFilter,
        setStickyTaskTitle: (id, title) =>
          setStickyTaskTitle(dispatch, id, title),
        hideNewStickyTaskCard: () => hideNewStickyTaskCard(dispatch),
        showNewStickyTaskCard: () => showNewStickyTaskCard(dispatch),
        addStickyTask: () => addStickyTask(dispatch),
        setMemberFilter: (memberName) => setMemberFilter(dispatch, memberName),
        setShowDone: (showDone) => setShowDone(dispatch, showDone),
        setSearchFilter: (searchFilter) =>
          setSearchFilter(dispatch, searchFilter),
        setStickyTaskMember: (id, memberName) =>
          setStickyTaskMember(dispatch, id, memberName),
        setStickyTaskStatus: (id, status) =>
          setStickyTaskStatus(dispatch, id, status),
        setStickyTaskPriority: (id, priority) =>
          setStickyTaskPriority(dispatch, id, priority),
        addMember: (member) => addMember(dispatch, member),
      }}
    >
      {children}
    </StickyTasksContext.Provider>
  );
};

export default StickyTasksContextProvider;
