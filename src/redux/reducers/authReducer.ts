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
  isLoading: boolean;
  userName: string;
};

const initialState: AuthReducerStateType = {
  isLoggedIn:
    !!localStorage.getItem("jwtAccessToken") ||
    !!localStorage.getItem("jwtRefreshToken"),
  tempMail: "",
  isLoading: false,
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
    setTempMail: (state: any, action: PayloadAction<string>) => {
      state.tempMail = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
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
  setLoading,
  setUserName,
  getUserInfo,
} = authSlice.actions;

export default authSlice.reducer;

export const AuthSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
  getTempMail: (state: any) => state.auth.tempMail,
  getLoading: (state: any) => state.auth.isLoading,
  getUserName: (state: any) => state.auth.userName,
};
