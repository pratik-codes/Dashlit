import { Dispatch } from "redux";
import { getMyQuotesService } from "../../firebase/functions/QuotesActions";
import {
  USER_MY_QUOTES_FAIL,
  USER_MY_QUOTES_REQUEST,
  USER_MY_QUOTES_SUCCESS
} from "../Constants/Actions";

export const getMyQuotesAction = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: USER_MY_QUOTES_REQUEST
    });
    const res = await getMyQuotesService();
    if (res) {
      dispatch({
        type: USER_MY_QUOTES_SUCCESS,
        payload: res.data
      });
      return res;
    }
  } catch (error: any) {
    dispatch({
      type: USER_MY_QUOTES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
