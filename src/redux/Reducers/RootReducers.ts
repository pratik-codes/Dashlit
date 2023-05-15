import { combineReducers } from "redux";
import { getLinksReducers } from "./Links.reducers";
import { getMyQuotesReducers } from "./Quotes.reducers";
import { getSettingsReducers } from "./Reducers";
import { getTodoReducers } from "./Todo.reducers";

const RootReducer = combineReducers({
  userSettingsData: getSettingsReducers,
  userLinkData: getLinksReducers,
  userTodoData: getTodoReducers,
  myQuotesData: getMyQuotesReducers
});

export default RootReducer;
