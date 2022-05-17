function themeSwitchReducer(state = { theme: "lightTheme" }, action: any) {
  switch (action.type) {
    case "isLightTheme":
      return { theme: "lightTheme" };
    case "isDarkTheme":
      return { theme: "darkTheme" };
    default:
      return state;
  }
}

export default themeSwitchReducer;
