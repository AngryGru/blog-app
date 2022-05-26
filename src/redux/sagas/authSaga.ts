import { all, takeLatest, put } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import {
  RegisterUser,
  registerUser,
  setLogStatus,
} from "../reducers/authReducer";

function* registerUserSaga(action: PayloadAction<RegisterUser>) {
  const { payload } = action;
  console.log(payload);
  yield put(setLogStatus(true));
}

export default function* authWatcher() {
  yield all([takeLatest(registerUser, registerUserSaga)]);
}
