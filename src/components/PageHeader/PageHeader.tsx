import React, { useState } from "react";
import "./PageHeader.css";
import Sidebar from "./Sidebar";
import { FaRegUser } from "react-icons/fa";

const PageHeader = () => {
  return (
    <header id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <FaRegUser /> Username
      </div>
    </header>
  );
};

export default PageHeader;
