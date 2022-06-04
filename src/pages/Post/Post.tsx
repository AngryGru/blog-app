import React, { useEffect } from "react";
import "./Post.css";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { loadPost, PostsSelectors } from "../../redux/reducers/postsReducer";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/lottie-loading.json";

const Post = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const dispatch = useDispatch();

  const { id: cardId } = useParams();
  useEffect(() => {
    if (cardId) {
      dispatch(loadPost(cardId));
    }
  }, [cardId]);

  const postData = useSelector(PostsSelectors.getSelectedPost);

  const singlePostLoading = useSelector(PostsSelectors.getSinglePostLoading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={classNames("postPage", {
        ["postPageDark"]: !isLightTheme,
      })}
    >
      {singlePostLoading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        postData && (
          <div className="postContainer">
            <div className="postTitle">{postData!.title}</div>
            <div className="postContent">
              <div className="postImage">
                {postData!.image ? (
                  <img
                    className="postImg"
                    src={postData!.image}
                    alt="post-image"
                  />
                ) : (
                  <img
                    className="postImg"
                    src="https://st2.depositphotos.com/1031174/12280/i/950/depositphotos_122808092-stock-photo-grey-textured-background.jpg"
                  />
                )}
              </div>
              <div className="postText">{postData!.text}</div>
            </div>
            <div className="postDate">
              {postData!.date.split("-").reverse().join(".")}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Post;
