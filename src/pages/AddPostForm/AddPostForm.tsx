import React from "react";
import "./AddPostForm.css";
import Input from "../../components/Input";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";
import { useSelector } from "react-redux";

const AddPostForm = () => {
  // const { theme } = useThemeContext();
  // const isLightTheme = theme === Theme.Light;
  const theme = useSelector((state: any) => state.themeSwitchReducer.theme);
  const isLightTheme = theme === "lightTheme";

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      className={classNames("formContainer", {
        ["formContainerDark"]: !isLightTheme,
      })}
    >
      <form
        onSubmit={onSubmit}
        className={classNames("addPostForm", {
          ["addPostFormDark"]: !isLightTheme,
        })}
      >
        <h1>Create post</h1>
        <label>
          <div>Post title:</div>
          <Input
            className={"postTitleInput"}
            type={"text"}
            placeholder={"Post title"}
          />
        </label>
        <label>
          <div>Post text:</div>
          <textarea className={"postTextarea"} placeholder={"Post text"} />
        </label>
        <label>
          <div>Add image:</div>
          <Input className={"postImgInput"} type={"file"} />
        </label>
        <div className="formActions">
          <button>Add</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
