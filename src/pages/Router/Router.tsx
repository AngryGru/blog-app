import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Posts from "../Posts";
import Post from "../Post";
import Information from "../Information";
import Authorization from "../Authorization";
import Confirmation from "../Confirmation";
import AddPostForm from "../AddPostForm";

import { useSelector, useDispatch } from "react-redux";
import { AuthSelector, getUserInfo } from "../../redux/reducers/authReducer";

const Router = () => {
  const isLoggedIn = useSelector(AuthSelector.getLogStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo(""));
    }
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<PageHeader />}>
            <Route path="cards-list" element={<Posts />} />
            <Route path="cards-list/:id" element={<Post />} />
            <Route path="info" element={<Information />} />
            <Route path="add-post" element={<AddPostForm />} />
          </Route>
          <Route path="*" element={<Navigate to={"/cards-list"} replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/auth"} element={<Authorization />} />
          <Route path={"/activate/:uuid/:token"} element={<Confirmation />} />
          <Route path="*" element={<Navigate to={"/auth"} replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
