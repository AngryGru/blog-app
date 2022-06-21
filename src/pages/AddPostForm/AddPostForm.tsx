import React from "react";
import "./AddPostForm.css";
import Input from "../../components/Input";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";
import { FileUploader } from "react-drag-drop-files";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/reducers/postsReducer";

const AddPostForm = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const [formValid, setFormValid] = useState(false);

  const [postTitle, setPostTitle] = useState("");
  const [postTitleDirty, setPostTitleDirty] = useState(false);

  const [postText, setPostText] = useState("");
  const [postTextDirty, setPostTextDirty] = useState(false);

  const [lessonNum, setLessonNum] = useState(0);
  const [lessonNumDirty, setLessonNumDirty] = useState(false);

  const [titleError, setTitleError] = useState("This field is required");
  const [textError, setTextError] = useState("This field is required");
  const [lessonNumError, setLessonNumError] = useState(
    "This field is required"
  );

  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (titleError || textError || lessonNumError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [titleError, textError, lessonNumError]);

  const validation = (target: any, name: any) => {
    switch (true) {
      case name === "postTitle" && target.value.length !== 0:
        setPostTitle(target.value);
        setTitleError("");
        break;
      case name === "postTitle" && target.value.length === 0:
        setTitleError("This field is required");
        break;

      case name === "postText" && target.value.length !== 0:
        setPostText(target.value);
        setTextError("");
        break;
      case name === "postText" && target.value.length === 0:
        setTextError("This field is required");
        break;

      case name === "lessonNumber" && target.value.length !== 0:
        setLessonNum(target.value);
        setLessonNumError("");
        break;
      case name === "lessonNumber" && target.value.length === 0:
        setLessonNumError("This field is required");
        break;
    }
  };

  const onBlur = (e: any) => {
    switch (e.target.name) {
      case "postTitle":
        setPostTitleDirty(true);
        break;
      case "postText":
        setPostTextDirty(true);
        break;
      case "lessonNumber":
        setLessonNumDirty(true);
        break;
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const postData = {
      title: postTitle,
      text: postText,
      lesson_num: lessonNum,
      image,
    };
    dispatch(createPost(postData));
    console.log(postData);
    onCancelBtnClick();
  };

  const onCancelBtnClick = () => {
    setPostTitle("");
    setPostText("");
    setLessonNum(0);
    setPostTitleDirty(false);
    setPostTextDirty(false);
    setLessonNumDirty(false);
  };

  const fileTypes = ["JPG", "JPEG", "PNG", "SVG"];

  const onChangeImage = (info: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(info);
    reader.onload = function () {
      const dataUrl = reader.result;
      if (dataUrl && typeof dataUrl === "string") {
        const base64 = dataUrl.split(",")[1];
        setImage(base64);
      }
    };
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
          <div>
            {postTitleDirty && titleError && (
              <span style={{ color: "red" }}>{titleError}</span>
            )}
          </div>
          <Input
            className={"addPostInp postTitleInput"}
            type={"text"}
            placeholder={"Post title"}
            name={"postTitle"}
            value={postTitle}
            onChange={(e: any) => validation(e.target, e.target.name)}
            onBlur={(e: any) => onBlur(e)}
          />
        </label>
        <label>
          <div>Lesson number:</div>
          <div>
            {lessonNumDirty && lessonNumError && (
              <span style={{ color: "red" }}>{lessonNumError}</span>
            )}
          </div>
          <Input
            className={"addPostInp lessonNumInput"}
            type={"number"}
            placeholder={"Lesson number"}
            name={"lessonNumber"}
            value={lessonNum}
            onChange={(e: any) => validation(e.target, e.target.name)}
            onBlur={(e: any) => onBlur(e)}
          />
        </label>
        <label>
          <div>Post text:</div>
          <div>
            {postTextDirty && textError && (
              <span style={{ color: "red" }}>{textError}</span>
            )}
          </div>
          <textarea
            className={"addPostInp postTextarea"}
            placeholder={"Post text"}
            name={"postText"}
            value={postText}
            onChange={(e: any) => validation(e.target, e.target.name)}
            onBlur={(e: any) => onBlur(e)}
          />
        </label>
        <label>
          <div>Add image:</div>
          <FileUploader
            handleChange={onChangeImage}
            name="file"
            types={fileTypes}
          >
            {image ? (
              <img
                src={`data:image/jpeg;base64, ${image}`}
                alt={"product"}
                className={image}
              />
            ) : (
              <div className="dragAndDrop">{"Drag & drop or browse file"}</div>
            )}
          </FileUploader>
        </label>
        <label>
          <div>Publish at:</div>
          <Input className={"addPostInp postDateInput"} type={"date"} />
        </label>
        <div className="formActions">
          <button>Add</button>
          <button onClick={onCancelBtnClick}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
