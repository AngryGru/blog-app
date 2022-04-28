import React from "react";
import "./Post.css";
import Card from "../../components/Card";
import { idText } from "typescript";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";

const Post = (props: any) => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  return (
    <div
      className={classNames("postPage", {
        ["postPageDark"]: !isLightTheme,
      })}
    >
      <div className="postTitle">Content title</div>
      <Card
        key={props.data.id}
        image={props.data.image}
        title={props.data.title}
        text={props.data.text}
        date={props.data.date}
      />
    </div>
  );
};

export default Post;
