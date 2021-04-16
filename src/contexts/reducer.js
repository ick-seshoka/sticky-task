import * as actions from "./actions";
import { stickyTasksData, newStickyTask } from "@data";
import { members } from "@data";

export const initialState = {
  stickyTasks: stickyTasksData,
  members: members,
  newStickyTaskCardOn: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MEMBERS: {
      const {
        payload: { members },
      } = action;

      return { ...state, members };
    }

    case actions.SET_STICKY_TASKS: {
      const {
        payload: { stickyTasks },
      } = action;

      return { ...state, stickyTasks };
    }

    case actions.ADD_STICKY_TASK: {
      debugger;
      return {
        ...state,
        stickyTasks: [
          ...state.stickyTasks,
          { id: state.stickyTasks.length + 1, ...newStickyTask },
        ],
      };
    }

    case actions.ADD_MEMBER: {
      return {
        ...state,
        members: [
          ...state.members,
          { id: state.members.length + 1, ...newMemeber },
        ],
      };
    }

    case actions.REMOVE_STICKY_TASK: {
      const {
        payload: { id },
      } = action;

      return {
        ...state,
        stickyTasks: [
          ...stickyTasks.filter((stickyTask) => stickyTask.id !== id),
        ],
      };
    }

    case actions.UPDATE_STICKY_TASK_TITLE: {
      const {
        payload: { id, title },
      } = action;

      const updateStickyTasks = [...state.stickyTasks].map((task) => {
        if (task.id === id) {
          return { ...task, title };
        }

        return task;
      });

      return { ...state, stickyTasks: [...updateStickyTasks] };
    }

    case actions.HIDE_NEW_STICKY_TASK_CARD: {
      return { ...state, newStickyTaskCardOn: false };
    }

    case actions.SHOW_NEW_STICKY_TASK_CARD: {
      return { ...state, newStickyTaskCardOn: true };
    }

    default: {
      return state;
    }
  }
};
