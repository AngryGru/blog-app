import React, { FC } from "react";
import "./Header.css";
import Button from "../../../components/Button";
import classNames from "classnames";

type HeaderProps = {
  onClick: (name: string) => void;
  activeTab: string;
};

const Header: FC<HeaderProps> = ({ onClick, activeTab }) => {
  const isLoginActive = activeTab === "login";
  return (
    <div className="loginHeader">
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
