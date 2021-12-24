import { combineReducers } from "redux";
import { getLinksReducers } from "./Links.reducers";
import { getTodoReducers } from "./Todo.reducers";

const RootReducer = combineReducers({
  userLinkData: getLinksReducers,
  userTodoData: getTodoReducers
});

export default RootReducer;
