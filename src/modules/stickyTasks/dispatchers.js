import * as actions from "./actions";

export const setStickyTaskTitle = (dispatch, id, title) => {
  dispatch({
    type: actions.SET_STICKY_TASK_TITLE,
    payload: { id, title },
  });
};

export const hideNewStickyTaskCard = (dispatch) => {
  dispatch({ type: actions.HIDE_NEW_STICKY_TASK_CARD });
};

export const showNewStickyTaskCard = (dispatch) => {
  dispatch({ type: actions.SHOW_NEW_STICKY_TASK_CARD });
};

export const addStickyTask = (dispatch) => {
  dispatch({ type: actions.ADD_STICKY_TASK });
  dispatch({ type: actions.HIDE_NEW_STICKY_TASK_CARD });
};

export const setMemberFilter = (dispatch, memberName) => {
  dispatch({ type: actions.SET_MEMBER_FILTER, payload: { memberName } });
};

export const setShowDone = (dispatch, showDone) => {
  dispatch({ type: actions.SET_SHOW_DONE, payload: { showDone } });
};

export const setSearchFilter = (dispatch, searchFilter) => {
  dispatch({ type: actions.SET_SEARCH_FILTER, payload: { searchFilter } });
};

export const setStickyTaskMember = (dispatch, id, memberName) => {
  dispatch({
    type: actions.SET_STICKY_TASK_MEMBER,
    payload: { id, memberName },
  });
};

export const setStickyTaskStatus = (dispatch, id, status) => {
  dispatch({
    type: actions.SET_STICKY_TASK_STATUS,
    payload: { id, status },
  });
};

export const setStickyTaskPriority = (dispatch, id, priority) => {
  dispatch({
    type: actions.SET_STICKY_TASK_PRIORITY,
    payload: { id, priority },
  });
};

export const addMember = (dispatch, member) => {
  dispatch({ type: actions.ADD_MEMBER, payload: { member } });
};
