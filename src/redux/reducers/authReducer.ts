import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
};

type AuthReducerStateType = {
  isLoggedIn: boolean;
};

const initialState: AuthReducerStateType = {
  isLoggedIn: !!localStorage.getItem("isLoggedIn"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state: any, action: PayloadAction<RegisterUser>) => {},
    setLogStatus: (state: any, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { registerUser, setLogStatus } = authSlice.actions;

export default authSlice.reducer;

export const AuthSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
};
