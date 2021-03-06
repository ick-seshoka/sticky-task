import * as actions from "./actions";
import { stickyTasksData, newStickyTask } from "@data";
import { membersData } from "@data";
import { getPersistedStateFromLocalStorage } from "@helpers";

const { members, stickyTasks } = getPersistedStateFromLocalStorage();

export const initialState = {
  stickyTasks: stickyTasks || stickyTasksData,
  members: members || membersData,
  newStickyTaskCardOn: true,
  memberFilter: "",
  showDone: false,
  searchFilter: "",
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
      return {
        ...state,
        stickyTasks: [
          ...state.stickyTasks,
          { id: state.stickyTasks.length + 1, ...newStickyTask },
        ],
      };
    }

    case actions.ADD_MEMBER: {
      const {
        payload: { member },
      } = action;

      return {
        ...state,
        members: [
          ...state.members,
          { id: state.members.length + 1, ...member },
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

    case actions.SET_STICKY_TASK_TITLE: {
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

    case actions.SET_MEMBER_FILTER: {
      const {
        payload: { memberName },
      } = action;

      return { ...state, memberFilter: memberName };
    }

    case actions.SET_SHOW_DONE: {
      const {
        payload: { showDone },
      } = action;

      return { ...state, showDone };
    }

    case actions.SET_SEARCH_FILTER: {
      const {
        payload: { searchFilter },
      } = action;

      return { ...state, searchFilter };
    }

    case actions.SET_STICKY_TASK_MEMBER: {
      const {
        payload: { id, memberName },
      } = action;

      const updateStickyTasks = [...state.stickyTasks].map((task) => {
        if (task.id === id) {
          return {
            ...task,
            user: memberName,
          };
        }
        return task;
      });

      return { ...state, stickyTasks: updateStickyTasks };
    }

    case actions.SET_STICKY_TASK_STATUS: {
      const {
        payload: { id, status },
      } = action;

      const updateStickyTasks = [...state.stickyTasks].map((task) => {
        if (task.id === id) {
          return { ...task, status };
        }

        return task;
      });

      return { ...state, stickyTasks: [...updateStickyTasks] };
    }

    case actions.SET_STICKY_TASK_PRIORITY: {
      const {
        payload: { id, priority },
      } = action;

      const updateStickyTasks = [...state.stickyTasks].map((task) => {
        if (task.id === id) {
          return { ...task, priority };
        }

        return task;
      });

      return { ...state, stickyTasks: [...updateStickyTasks] };
    }

    default: {
      return state;
    }
  }
};
