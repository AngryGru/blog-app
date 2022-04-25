import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default (props: any) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        All posts
      </a>
      <a className="menu-item" href="/salads">
        My posts
      </a>
      <a className="menu-item" href="/pizzas">
        Add posts
      </a>
      <a className="menu-item" href="/desserts">
        Log out
      </a>
    </Menu>
  );
};
