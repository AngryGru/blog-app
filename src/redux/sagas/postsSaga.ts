import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  loadData,
  setPosts,
  setPost,
  loadPost,
  setAllPostsLoading,
  setSinglePostLoading,
} from "../reducers/postsReducer";
import { getPosts, getSinglePost } from "../api/index";

function* getPostsSaga() {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield call(getPosts);
  if (status === 200) {
    yield put(setPosts(data.results));
  }
  yield put(setAllPostsLoading(false));
}

function* getSinglePostSaga(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status } = yield call(getSinglePost, action.payload);
  if (status === 200) {
    yield put(setPost(data));
  }
  yield put(setSinglePostLoading(false));
}

export default function* postWatcher() {
  yield all([
    takeLatest(loadData, getPostsSaga),
    takeLatest(loadPost, getSinglePostSaga),
  ]);
}
