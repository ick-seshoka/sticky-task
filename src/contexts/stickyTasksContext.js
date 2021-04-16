import React, { createContext, useState } from "react";

import { stickyTasksData } from "@data";

export const StickyTasksContext = createContext();

const StickyTasksContextProvider = (props) => {
  const [state, setState] = useState({
    stickyTasks: stickyTasksData,
    memebers: [],
  });

  const setStickyTasks = (stickyTasks) => {
    setState({ ...state, stickyTasks });
  };

  const setMemebers = (memebers) => {
    setState({ ...state, memebers });
  };

  const addStickyTask = (stickyTask) => {
    setStickyTasks([...stickyTasks, stickyTask]);
  };

  const removeStickyTasks = (id) => {
    setStickyTasks(stickyTasks.filter((stickyTask) => stickyTask.id !== id));
  };

  const { stickyTasks, memebers } = state;

  return (
    <StickyTasksContext.Provider
      value={{
        memebers,
        setMemebers,
        stickyTasks,
        setStickyTasks,
        addStickyTask,
        removeStickyTasks,
      }}
    >
      {props.children}
    </StickyTasksContext.Provider>
  );
};

export default StickyTasksContextProvider;
