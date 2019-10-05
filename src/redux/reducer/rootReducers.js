import reducerTodo from "./reducerTodo";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  todo: reducerTodo
});
export default rootReducers;
