import * as actions from "./actions";

export const updateStickyTaskTitle = (dispatch, id, title) => {
  debugger;
  dispatch({
    type: actions.UPDATE_STICKY_TASK_TITLE,
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
