import React, { FC } from "react";
import "./Button.css";

type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  className: string;
  value: string;
};

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={props.className}
    >
      {props.value}
    </button>
  );
};

export default Button;
