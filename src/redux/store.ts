import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function counterReducer(state = { value: 0 }, action: any) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

function tabSwitchReducer(state = { activeTab: "tab_1" }, action: any) {
  switch (action.type) {
    case "activeTab_1":
      return { activeTab: "tab_1" };
    case "activeTab_2":
      return { activeTab: "tab_2" };
    case "activeTab_3":
      return { activeTab: "tab_3" };
    default:
      return state;
  }
}

export const store = createStore(tabSwitchReducer);
