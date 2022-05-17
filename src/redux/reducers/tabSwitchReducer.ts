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

export default tabSwitchReducer;
