import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Modal from "../../Modal";

import { Theme, useThemeContext } from "../../../context/themeModeContext";
import classNames from "classnames";
import { useSelector } from "react-redux";

export default (props: any) => {
  // const { theme, onChangeTheme = () => {} } = useThemeContext();
  // const isLightTheme = theme === Theme.Light;

  const theme = useSelector((state: any) => state.themeSwitchReducer.theme);
  const isLightTheme = theme === "lightTheme";

  const [modalActive, setModalActive] = useState(false);

  const onLogOutBtnClick = () => {
    localStorage.setItem("isLoggedIn", "");
    window.location.replace("/auth");
    setModalActive(false);
  };

  return (
    <Menu
      customBurgerIcon={<FiMenu />}
      burgerButtonClassName={classNames("barsLight", {
        ["barsDark"]: !isLightTheme,
      })}
      customCrossIcon={<IoClose />}
      crossButtonClassName={classNames("crossLight", {
        ["crossDark"]: !isLightTheme,
      })}
      menuClassName={classNames("menuLight", {
        ["menuDark"]: !isLightTheme,
      })}
      itemClassName={classNames("lightItem", {
        ["darkItem"]: !isLightTheme,
      })}
    >
      <NavLink className="menu-item" to="cards-list">
        All posts
      </NavLink>
      <NavLink className="menu-item" to="info">
        My posts
      </NavLink>
      <NavLink className="menu-item" to="add-post">
        Add posts
      </NavLink>
      <a className="menu-item" href="#" onClick={() => setModalActive(true)}>
        Log out
      </a>
      <Modal active={modalActive} setActive={setModalActive}>
        <p className="modalText">Are you sure you want to log out?</p>
        <div className="modalActions">
          <button className="logoutSubmitBtn" onClick={onLogOutBtnClick}>
            OK
          </button>
          <button
            className="logoutCancelBtn"
            onClick={() => setModalActive(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </Menu>
  );
};
