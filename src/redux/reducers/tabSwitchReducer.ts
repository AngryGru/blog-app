function tabSwitchReducer(state = { activeTab: "tab_1" }, action: any) {
  switch (action.type) {
    case "activeTab_1":
      return { ...state, activeTab: action.payload };
    case "activeTab_2":
      return { ...state, activeTab: action.payload };
    case "activeTab_3":
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
}

export default tabSwitchReducer;
