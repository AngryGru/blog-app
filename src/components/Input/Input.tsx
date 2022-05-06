import React, { FC } from "react";
import "./Input.css";

// type InputProps = {
//   type: string;
//   className: string;
//   name: string;
//   value: string;
//   placeholder: string;
//   onBlur?: () => void;
//   onChange?: () => void;
// };

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
