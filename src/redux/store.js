import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducers from "./reducer/rootReducers";

const middileware = applyMiddleware(thunk, logger);

const store = createStore(rootReducers, middileware);

export default store;
