import React, { useState } from "react";
import "./PageHeader.css";
import Sidebar from "./Sidebar";
import { FaRegUser } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";

const PageHeader = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const onClickTheme = () => {
    theme === Theme.Light
      ? onChangeTheme(Theme.Dark)
      : onChangeTheme(Theme.Light);
  };

  return (
    <div>
      <header
        id="outer-container"
        className={classNames("headerLight", {
          ["headerDark"]: !isLightTheme,
        })}
      >
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <div>
            <FaRegUser /> Username
          </div>
          <div className="themeToggle">
            <label className="switch">
              <input type="checkbox" onClick={() => onClickTheme()} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default PageHeader;
