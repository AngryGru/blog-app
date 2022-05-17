import React, { FC, useState } from "react";
import "./Modal.css";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useSelector } from "react-redux";

type ModalProps = {
  active: boolean;
  setActive: (acitve: boolean) => void;
};

const Modal: FC<ModalProps> = ({ active, setActive }) => {
  // const { theme } = useThemeContext();
  // const isLightTheme = theme === Theme.Light;

  const theme = useSelector((state: any) => state.themeSwitchReducer.theme);
  const isLightTheme = theme === "lightTheme";

  const onLogOutBtnClick = () => {
    localStorage.setItem("isLoggedIn", "");
    window.location.replace("/auth");
    setActive(false);
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={classNames("modalContent", {
          ["modalContentDark"]: !isLightTheme,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="modalText">Are you sure you want to log out?</p>
        <div className="modalActions">
          <button className="logoutSubmitBtn" onClick={onLogOutBtnClick}>
            OK
          </button>
          <button className="logoutCancelBtn" onClick={() => setActive(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
