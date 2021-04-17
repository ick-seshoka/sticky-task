import * as actions from "./actions";

export const updateStickyTaskTitle = (dispatch, id, title) => {
  dispatch({
    type: actions.SET_STICKY_TASK_TITLE,
    payload: { id, title },
  });
};

export const hideNewStickyTaskCard = (dispatch) => {
  dispatch({ type: actions.HIDE_NEW_STICKY_TASK_CARD });
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
