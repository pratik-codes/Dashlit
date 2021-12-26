import { combineReducers } from "redux";
import { getLinksReducers } from "./Links.reducers";
import { getSettingsReducers } from "./Reducers";
import { getTodoReducers } from "./Todo.reducers";

const RootReducer = combineReducers({
  userSettingsData: getSettingsReducers,
  userLinkData: getLinksReducers,
  userTodoData: getTodoReducers
});

export default RootReducer;
