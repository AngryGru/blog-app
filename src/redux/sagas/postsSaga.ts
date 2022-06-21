import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  loadAllPosts,
  loadMyPosts,
  setAllPosts,
  setMyPosts,
  setSelectedPost,
  loadPost,
  setAllPostsLoading,
  setSinglePostLoading,
  setTotalAllPostsCount,
  createPost,
} from "../reducers/postsReducer";
import {
  getPosts,
  getSinglePost,
  getMyPostsApi,
  createPostApi,
} from "../api/index";
import { callCheckingAuth } from "./callCheckingAuth";

function* getPostsSaga(action: any) {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield call(getPosts, action.payload);
  if (status === 200) {
    yield put(setAllPosts(data.results));
    yield put(setTotalAllPostsCount(data.count));
  }
  yield put(setAllPostsLoading(false));
}

function* getSinglePostSaga(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status } = yield call(getSinglePost, action.payload);
  if (status === 200) {
    yield put(setSelectedPost(data));
  }
  yield put(setSinglePostLoading(false));
}

function* getMyPostsSaga() {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield callCheckingAuth(getMyPostsApi);
  if (status === 200) {
    console.log(data);
    yield put(setMyPosts(data.results));
  }
  yield put(setAllPostsLoading(false));
}

function* createPostSaga(action: any) {
  const { data, status } = yield callCheckingAuth(
    createPostApi,
    action.payload
  );
  console.log(status);
  console.log(data);
}

export default function* postsWatcher() {
  yield all([
    takeLatest(loadAllPosts, getPostsSaga),
    takeLatest(loadPost, getSinglePostSaga),
    takeLatest(loadMyPosts, getMyPostsSaga),
    takeLatest(createPost, createPostSaga),
  ]);
}
