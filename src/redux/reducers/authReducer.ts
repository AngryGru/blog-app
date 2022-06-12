import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
  callback: () => void;
};

type AuthReducerStateType = {
  isLoggedIn: boolean;
  tempMail: string;
  isAuthLoading: boolean;
  userName: string;
};

const initialState: AuthReducerStateType = {
  isLoggedIn:
    !!localStorage.getItem("jwtAccessToken") ||
    !!localStorage.getItem("jwtRefreshToken"),
  tempMail: "",
  isAuthLoading: false,
  userName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    activateUser: (state: any, action: any) => {},
    loginUser: (
      state: any,
      action: PayloadAction<{ email: string; password: string }>
    ) => {},
    registerUser: (state: any, action: PayloadAction<RegisterUser>) => {},
    setLogStatus: (state: any, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setLogOut: (state, action: any) => {},
    setTempMail: (state: any, action: PayloadAction<string>) => {
      state.tempMail = action.payload;
    },
    setAuthLoading: (state, action) => {
      state.isAuthLoading = action.payload;
    },
    getUserInfo: (state, action: any) => {},
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const {
  registerUser,
  setLogStatus,
  setTempMail,
  activateUser,
  loginUser,
  setAuthLoading,
  setUserName,
  getUserInfo,
  setLogOut,
} = authSlice.actions;

export default authSlice.reducer;

export const AuthSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
  getTempMail: (state: any) => state.auth.tempMail,
  getAuthLoading: (state: any) => state.auth.isAuthLoading,
  getUserName: (state: any) => state.auth.userName,
};
