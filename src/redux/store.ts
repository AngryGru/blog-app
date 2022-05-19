import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";
import tabSwitchReducer from "./reducers/tabSwitchReducer";
import themeSwitchReducer from "./reducers/themeSwitchReducer";
import postsReducer from "./reducers/postsReducer";
import authReducer from "./reducers/authReducer";

import { configureStore } from "@reduxjs/toolkit";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  tabSwitchReducer,
  themeSwitchReducer,

  posts: postsReducer,
  auth: authReducer,
});

// function counterReducer(state = { value: 0 }, action: any) {
//   switch (action.type) {
//     case "counter/incremented":
//       return { value: state.value + 1 };
//     case "counter/decremented":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

// export const store = createStore(rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});
