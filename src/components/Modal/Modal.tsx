import React, { FC } from "react";
import "./Modal.css";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";

type ModalProps = {
  active: boolean;
  setActive: (acitve: boolean) => void;
  children: any;
};

const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

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
