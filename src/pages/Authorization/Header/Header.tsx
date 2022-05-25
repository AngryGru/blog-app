import React, { FC } from "react";
import "./Header.css";
import Button from "../../../components/Button";
import { Theme, useThemeContext } from "../../../context/themeModeContext";
import classNames from "classnames";

import { useSelector } from "react-redux";

type HeaderProps = {
  onClick: (name: string) => void;
  activeTab: string;
};

const Header: FC<HeaderProps> = ({ onClick, activeTab }) => {
  const isLoginActive = activeTab === "login";

  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  return (
    <div
      className={classNames("authHeader", {
        ["authHeaderDark"]: !isLightTheme,
      })}
    >
      <Button
        className={classNames("btnTitle", { ["active"]: isLoginActive })}
        onClick={() => onClick("login")}
        value={"Login"}
      />
      <div className="dash" />
      <Button
        className={classNames("btnTitle", { ["active"]: !isLoginActive })}
        onClick={() => onClick("registration")}
        value={"Registration"}
      />
    </div>
  );
};

export default Header;
