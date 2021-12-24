import { Dispatch } from "redux";
import { getUserLinksService } from "../../firebase/functions/LinksActions";
import { getUserTodoService } from "../../firebase/functions/TodoActions";
import {
  USER_LINKS_REQUEST,
  USER_LINKS_SUCCESS,
  USER_LINKS_FAIL
} from "../Constants/Links.constants";
import {
  USER_TODO_FAIL,
  USER_TODO_REQUEST,
  USER_TODO_SUCCESS
} from "../Constants/Todo.constants";

const uid = localStorage.getItem("user_uid");

export const getLinksList = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: USER_LINKS_REQUEST
    });
    const res = await getUserLinksService();
    if (res.success) {
      dispatch({
        type: USER_LINKS_SUCCESS,
        payload: res.data
      });
      console.log("userLinksData", res);
      return res;
    }
  } catch (error: any) {
    dispatch({
      type: USER_LINKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const getTodoList = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: USER_TODO_REQUEST
    });
    const res = await getUserTodoService();
    if (res.success) {
      dispatch({
        type: USER_TODO_SUCCESS,
        payload: res.data
      });
      console.log("userTodoData", res);
      return res;
    }
  } catch (error: any) {
    dispatch({
      type: USER_TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
