import React from "react";
import "./Link.css";

const Link = (props: any) => {
  return (
    <a className={props.className} href={props.href}>
      {props.title}
    </a>
  );
};

export default Link;
