import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';

import rootReducer from "./rootReducer";

export const middlewares = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // redux devtools
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
