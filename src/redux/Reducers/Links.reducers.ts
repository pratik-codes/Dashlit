import {
  USER_LINKS_REQUEST,
  USER_LINKS_SUCCESS,
  USER_LINKS_FAIL
} from "../Constants/Links.constants";

export type getLinksAction = {
  type: string;
  payload: any;
};

const LinksInitialState = { LinksInitialState: [] };

export const getLinksReducers = (
  state = LinksInitialState,
  action: getLinksAction
) => {
  switch (action.type) {
    case USER_LINKS_REQUEST:
      return { loading: true };
    case USER_LINKS_SUCCESS:
      return { loading: false, data: action.payload };
    case USER_LINKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
