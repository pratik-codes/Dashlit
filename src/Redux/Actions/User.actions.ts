import { Dispatch } from "redux";
import { getUserLinksService } from "../../firebase/functions/LinksActions";
import {
  USER_LINKS_REQUEST,
  USER_LINKS_SUCCESS,
  USER_LINKS_FAIL
} from "../Constants/Links.constants";

const uid = localStorage.getItem("user_uid");

export const getLinksList = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: USER_LINKS_REQUEST
    });
    const res = await getUserLinksService();
    console.log(res);
    if (res.success) {
      dispatch({
        type: USER_LINKS_SUCCESS,
        payload: res.data
      });
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
