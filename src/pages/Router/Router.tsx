import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Posts from "../Posts";
import Information from "../Information";
import Authorization from "../Authorization";
import Confirmation from "../Confirmation";

const Router = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<PageHeader />}>
            <Route path="cards-list" element={<Posts />} />
            <Route path="info" element={<Information />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path={"/auth"} element={<Authorization />}></Route>
          <Route path={"/confirm"} element={<Confirmation />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
