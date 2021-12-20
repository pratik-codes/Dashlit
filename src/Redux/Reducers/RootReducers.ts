import { combineReducers } from "redux";
import { getLinksReducers } from "./Links.reducers";

const RootReducer = combineReducers({
  userLinkData: getLinksReducers
});

export default RootReducer;
