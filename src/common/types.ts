import React from "react";

export type CardType = {
  id: string;
  image?: string;
  title: string;
  text: string;
  date: string;
  likeStatus?: LikeStatus | null;
  saved?: boolean;
  onClick?: () => void;
};

export enum LikeStatus {
  Like = "like",
  Dislike = "dislike",
}
