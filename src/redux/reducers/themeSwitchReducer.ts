function themeSwitchReducer(state = { theme: "lightTheme" }, action: any) {
  switch (action.type) {
    case "isLightTheme":
      return { ...state, theme: "lightTheme" };
    case "isDarkTheme":
      return { ...state, theme: "darkTheme" };
    default:
      return state;
  }
}

export default themeSwitchReducer;
