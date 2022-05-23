import React, { FC, useState } from "react";
import "./Modal.css";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useSelector } from "react-redux";

type ModalProps = {
  active: boolean;
  setActive: (acitve: boolean) => void;
  children: any;
};

const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
  // const { theme } = useThemeContext();
  // const isLightTheme = theme === Theme.Light;

  const theme = useSelector((state: any) => state.themeSwitchReducer.theme);
  const isLightTheme = theme === "lightTheme";
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
        {children}
      </div>
    </div>
  );
};

export default Modal;
