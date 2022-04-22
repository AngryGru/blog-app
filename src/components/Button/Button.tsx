import React from "react";
import "./Button.css";

const Button = (props: any) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.value}
    </button>
  );
};

export default Button;
