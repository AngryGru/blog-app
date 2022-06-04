import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";
import tabSwitchReducer from "./reducers/tabSwitchReducer";
import postsReducer from "./reducers/postsReducer";
import authReducer from "./reducers/authReducer";

import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  tabSwitchReducer,
  posts: postsReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
