import React from "react";
import "./Posts.css";
import CardList from "../../components/CardList";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";

const Posts = (props: any) => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classNames("postsPage", {
        ["postsPageDark"]: !isLightTheme,
      })}
    >
      <div className="postsHeader">
        <p>My posts</p>
        <button className="addBtn">Add</button>
      </div>
      <CardList data={props.data} />
    </div>
  );
};

export default Posts;
