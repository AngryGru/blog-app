import React from "react";
import "./Post.css";
import Card from "../../components/Card";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useParams } from "react-router-dom";
import classNames from "classnames";

const Post = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const LIST_DATA = [
    {
      id: 0,
      image:
        "https://images.hdqwalls.com/download/triangles-colorful-background-nz-1920x1080.jpg",
      text: "Lorem ipsum dolor sit amet consectetur.",
      date: "2022-04-16",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi.",
      date: "2022-03-10",
      lesson_num: 1,
      title: "What is Lorem?",
      author: 1,
    },
    {
      id: 2,
      text: "Dolorum, eligendi. Lorem consectetur adipisicing elit.",
      date: "2022-06-18",
      lesson_num: 2,
      title: "What is Ipsum?",
      author: 2,
    },
    {
      id: 3,
      image:
        "https://images.hdqwalls.com/download/colorful-polygons-1920x1080.jpg",
      text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.",
      date: "2022-05-08",
      lesson_num: 3,
      title: "What is Dolorum?",
      author: 3,
    },
    {
      id: 4,
      image:
        "https://www.teahub.io/photos/full/128-1284836_desktop-wallpaper-laptop-mac-macbook-air-vk42-rainbow.jpg",
      text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.",
      date: "2022-05-09",
      lesson_num: 4,
      title: "Avocado runs the world!",
      author: 4,
    },
    {
      id: 5,
      image:
        "https://stackify.com/wp-content/uploads/2017/11/OOPS-concept-abstraction-881x441.jpg",
      text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.  Sit amet consectetur lorem ipsum dolor adipisicing elit. Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.",
      date: "2022-05-07",
      lesson_num: 5,
      title: "The Voyager's Courage",
      author: 5,
    },
  ];

  const { id } = useParams();

  const postData = LIST_DATA.find((post: any) => id == post.id);

  return (
    <div
      className={classNames("postPage", {
        ["postPageDark"]: !isLightTheme,
      })}
    >
      {
        <div className="postContainer">
          <div className="postTitle">{postData!.title}</div>
          <div className="postContent">
            {postData!.image ? (
              <img className="postImg" src={postData!.image} alt="post-image" />
            ) : (
              <img
                className="postImg"
                src={require("../../assets/no-img-bg.jpg")}
              />
            )}
            <div className="postText">{postData!.text}</div>
          </div>
          <div className="postDate">
            {postData!.date.split("-").reverse().join(".")}
          </div>
        </div>
      }
    </div>
  );
};

export default Post;
