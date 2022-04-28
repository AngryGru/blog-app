import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import { Theme, useThemeContext } from "../../../context/themeModeContext";
import classNames from "classnames";

export default (props: any) => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
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
      <a className="menu-item" href="#">
        All posts
      </a>
      <a className="menu-item" href="#">
        My posts
      </a>
      <a className="menu-item" href="#">
        Add posts
      </a>
      <a className="menu-item" href="#">
        Log out
      </a>
    </Menu>
  );
};
