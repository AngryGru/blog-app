import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Card.css";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoBookmarkOutline, IoEyeOutline } from "react-icons/io5";
import { setLikePost, setSavedPost } from "../../redux/reducers/postsReducer";
import { LikeStatus } from "../../common/types";
import classNames from "classnames";

type CardProps = {
  id: any;
  image?: string;
  title: string;
  text: string;
  date: string;
  onClick?: () => void;
  likeStatus?: string;
  saved?: boolean;
};

const Card: FC<CardProps> = (props) => {
  const { image, title, text, date, id, likeStatus, saved } = props;

  const dispatch = useDispatch();

  const handleButtonClick = (action: string) => {
    if (action === "like" || action === "dislike") {
      dispatch(setLikePost({ id, action }));
    } else if (action === "save" || action === "unset") {
      dispatch(setSavedPost({ id, action }));
    }
  };

  return (
    <div className="card">
      <div className="cardContent">
        {image ? (
          <img src={image} />
        ) : (
          <img
            src={
              "https://st2.depositphotos.com/1031174/12280/i/950/depositphotos_122808092-stock-photo-grey-textured-background.jpg"
            }
            alt="Default image"
          />
        )}
        <div className="cardInfo">
          <h3 className="cardContentTitle">{title}</h3>
          <p className="cardContentText">{text}</p>
          <p className="cardContentDate">
            {date.split("-").reverse().join(".")}
          </p>
          <div className="cardActions">
            <button className="actions eyeBtn" onClick={props.onClick}>
              <IoEyeOutline />
            </button>
            <button
              className={classNames("actions", {
                ["activeLike"]: likeStatus === LikeStatus.Like,
              })}
              onClick={() => {
                handleButtonClick(LikeStatus.Like);
              }}
            >
              <AiOutlineLike />
            </button>
            <button
              className={classNames("actions", {
                ["activeDislike"]: likeStatus === LikeStatus.Dislike,
              })}
              onClick={() => {
                handleButtonClick(LikeStatus.Dislike);
              }}
            >
              <AiOutlineDislike />
            </button>
            <button
              className={classNames("actions", {
                ["activeSave"]: likeStatus === "save",
              })}
              onClick={() => {
                handleButtonClick(saved ? "unset" : "save");
              }}
            >
              <IoBookmarkOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
