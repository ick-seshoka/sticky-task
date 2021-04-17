import React, { createContext, useReducer } from "react";

import {
  initialState,
  reducer,
  updateStickyTaskTitle,
  hideNewStickyTaskCard,
  addStickyTask,
  setMemberFilter,
  getFilteredStickyTasks,
  getMemberFilter,
  getMembers,
} from "@modules/stickyTasks";

export const StickyTasksContext = createContext();

const StickyTasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { newStickyTaskCardOn } = state;
  const stickyTasks = getFilteredStickyTasks(state);
  const members = getMembers(state);
  const memberFilter = getMemberFilter(state);

  return (
    <StickyTasksContext.Provider
      value={{
        stickyTasks,
        members,
        newStickyTaskCardOn,
        memberFilter,
        titleUpdate: (id, title) => updateStickyTaskTitle(dispatch, id, title),
        hideNewStickyTaskCard: () => hideNewStickyTaskCard(dispatch),
        addStickyTask: () => addStickyTask(dispatch),
        setMemberFilter: (memberName) => setMemberFilter(dispatch, memberName),
      }}
    >
      {children}
    </StickyTasksContext.Provider>
  );
};

export default StickyTasksContextProvider;
