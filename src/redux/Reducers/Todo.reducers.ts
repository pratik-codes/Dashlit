import {
  USER_TODO_FAIL,
  USER_TODO_REQUEST,
  USER_TODO_SUCCESS
} from "../Constants/Todo.constants";

export type getTodoAction = {
  type: string;
  payload: any;
};

const TodoInitialState = { TodoInitialState: [] };

export const getTodoReducers = (
  state = TodoInitialState,
  action: getTodoAction
) => {
  switch (action.type) {
    case USER_TODO_REQUEST:
      return { loading: true };
    case USER_TODO_SUCCESS:
      localStorage.setItem("TodoData", JSON.stringify(action.payload));
      return { loading: false, data: action.payload };
    case USER_TODO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
