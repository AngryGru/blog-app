import React from "react";
import "./Button.css";

const handleClick = () => {
  console.log("CLICK");
};

const Button = (props: any) => {
  return (
    <button onClick={handleClick} className="btn">
      {props.value}
    </button>
  );
};

export default Button;
