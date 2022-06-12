import { all, takeLatest, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import { callCheckingAuth } from "./callCheckingAuth";
import {
  RegisterUser,
  registerUser,
  setTempMail,
  activateUser,
  loginUser,
  setLogStatus,
  setAuthLoading,
  setUserName,
  getUserInfo,
  setLogOut,
} from "../reducers/authReducer";

import {
  registerUserApi,
  activateUserApi,
  loginUserApi,
  getUserInfoApi,
} from "../api";

function* registerUserSaga(action: PayloadAction<RegisterUser>) {
  const { callback, email, name, password } = action.payload;

  const { data, status } = yield call(registerUserApi, {
    email,
    username: name,
    password,
  });

  if (status === 201) {
    yield put(setTempMail(data.email || ""));
    callback();
  }
}

function* userActivateSaga(action: any) {
  const { uuid, token, callback } = action.payload;
  const { status } = yield call(activateUserApi, uuid, token);
  if (status === 204) {
    callback();
  }
}

function* loginUserSaga(action: any) {
  yield put(setAuthLoading(true));
  const userData = action.payload;

  const { status, data, problem } = yield call(loginUserApi, userData);

  if (status === 200) {
    localStorage.setItem("jwtAccessToken", data.access);
    localStorage.setItem("jwtRefreshToken", data.refresh);
    yield put(setLogStatus(true));
  } else {
    console.error("Error login: ", problem);
  }
  yield put(setAuthLoading(false));
}

// function* getUserInfoSaga() {
//   const { status, data } = yield callCheckingAuth(getUserInfoApi);

//   console.log(data);

//   if (status === 200) {
//     yield put(setUserName(data.username));
//   }
// }

export function* logOutSaga() {
  localStorage.removeItem("jwtAccessToken");
  localStorage.removeItem("jwtRefreshToken");
  yield put(setLogStatus(false));
}

export default function* authWatcher() {
  yield all([
    takeLatest(registerUser, registerUserSaga),
    takeLatest(activateUser, userActivateSaga),
    takeLatest(loginUser, loginUserSaga),
    // takeLatest(getUserInfo, getUserInfoSaga),
    takeLatest(setLogOut, logOutSaga),
  ]);
}
