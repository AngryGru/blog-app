import { all } from "redux-saga/effects";
import authWatcher from "./authSaga";

function* postWatcher() {}

export default function* rootSaga() {
  yield all([authWatcher(), postWatcher()]);
}
