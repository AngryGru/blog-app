// import { createSlice } from "@reduxjs/toolkit";

// type TabState = {
//   activeTab: string;
// };

// const initialState: TabState = {
//   activeTab: "tab_1",
// };

// const tabSlice = createSlice({
//   name: "tab",
//   initialState,
//   reducers: {
//     setActiveTab: (state, action) => {
//       state.activeTab = action.payload;
//     },
//   },
// });

// export const { setActiveTab } = tabSlice.actions;

// export default tabSlice.reducer;

// export const TabSelector = {
//   getActiveTab: (state: any) => state.tab.activeTab,
// };

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
