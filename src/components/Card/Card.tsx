import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Card.css";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoBookmarkOutline, IoEyeOutline } from "react-icons/io5";
import { setLikePost, setSavedPost } from "../../redux/reducers/postsReducer";
import { LikeStatus } from "../../common/types";
import classNames from "classnames";
import { Card as CardType } from "../../common/types";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { setSelectedImage } from "../../redux/reducers/postsReducer";

type CardProps = {
  id: any;
  image?: string;
  title: string;
  text: string;
  date: string;
  onClick?: (event: any) => void;
  likeStatus?: LikeStatus | null;
  saved?: boolean;
  setModalActive: (isModalActive: boolean) => void;
};

const Card: FC<CardProps> = (props) => {
  const { image, title, text, date, id, likeStatus, saved, onClick } = props;

  const defaultImage =
    "https://st2.depositphotos.com/1031174/12280/i/950/depositphotos_122808092-stock-photo-grey-textured-background.jpg";

  const dispatch = useDispatch();

  const handleButtonClick = (event: any, action: string) => {
    event.stopPropagation();
    if (action === "like" || action === "dislike") {
      dispatch(
        setLikePost({ id, action: likeStatus === action ? null : action })
      );
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
            <button id="eyeBtn" className="actions eyeBtn" onClick={onClick}>
              <IoEyeOutline />
            </button>
            <button
              id="likeBtn"
              className={classNames("actions", {
                ["activeLike"]: likeStatus === LikeStatus.Like,
              })}
              onClick={(event) => {
                handleButtonClick(event, LikeStatus.Like);
              }}
            >
              <AiOutlineLike />
            </button>
            <button
              id="dislikeBtn"
              className={classNames("actions", {
                ["activeDislike"]: likeStatus === LikeStatus.Dislike,
              })}
              onClick={(event) => {
                handleButtonClick(event, LikeStatus.Dislike);
              }}
            >
              <AiOutlineDislike />
            </button>
            <button
              id="saveBtn"
              className={classNames("actions", {
                ["activeSave"]: saved,
              })}
              onClick={(event) => {
                handleButtonClick(event, saved ? "unset" : "save");
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
