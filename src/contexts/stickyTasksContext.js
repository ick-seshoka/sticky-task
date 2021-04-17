import React, { createContext, useReducer } from "react";

import {
  initialState,
  reducer,
  updateStickyTaskTitle,
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
} from "@modules/stickyTasks";
import { getSearchFilter } from "../modules/stickyTasks/selectors";

export const StickyTasksContext = createContext();

const StickyTasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { newStickyTaskCardOn } = getNewStickyTaskCardOn(state);
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
        titleUpdate: (id, title) => updateStickyTaskTitle(dispatch, id, title),
        hideNewStickyTaskCard: () => hideNewStickyTaskCard(dispatch),
        addStickyTask: () => addStickyTask(dispatch),
        setMemberFilter: (memberName) => setMemberFilter(dispatch, memberName),
        setShowDone: (showDone) => setShowDone(dispatch, showDone),
        setSearchFilter: (searchFilter) =>
          setSearchFilter(dispatch, searchFilter),
      }}
    >
      {children}
    </StickyTasksContext.Provider>
  );
};

export default StickyTasksContextProvider;
