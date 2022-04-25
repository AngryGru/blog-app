import React from "react";
import "./Button.css";

const Button = (props: any) => {
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
