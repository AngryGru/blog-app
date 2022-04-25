import React from "react";
import "./Input.css";

const Input = (props: any) => {
  return (
    <input
      type={props.type}
      className={props.className}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onBlur={props.onBlur}
      onChange={props.onChange}
    />
  );
};

export default Input;
