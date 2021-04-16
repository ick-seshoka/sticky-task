import React, { createContext, useReducer } from "react";

import { initialState, reducer } from "./reducer";
import {
  updateStickyTaskTitle,
  hideNewStickyTaskCard,
  addStickyTask,
} from "./dispatchers";

export const StickyTasksContext = createContext();

const StickyTasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { stickyTasks, members, newStickyTaskCardOn } = state;

  return (
    <StickyTasksContext.Provider
      value={{
        stickyTasks,
        members,
        newStickyTaskCardOn,
        titleUpdate: (id, title) => updateStickyTaskTitle(dispatch, id, title),
        hideNewStickyTaskCard: () => hideNewStickyTaskCard(dispatch),
        addStickyTask: () => addStickyTask(dispatch),
      }}
    >
      {children}
    </StickyTasksContext.Provider>
  );
};

export default StickyTasksContextProvider;
